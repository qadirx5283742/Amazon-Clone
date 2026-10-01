# Amazon Clone - React Native Expo App

A full-featured Amazon-like e-commerce mobile application built with React Native, Expo Router, Redux Toolkit, and Supabase.

## 🚀 Tech Stack

- **Framework**: Expo (React Native) with Expo Router v6
- **State Management**: Redux Toolkit with Redux Persist
- **Backend**: Supabase (Auth, Database, Storage)
- **Navigation**: Expo Router (file-based routing)
- **UI Components**: Custom components with React Native Gesture Handler & Reanimated
- **Fonts**: Amazon Ember font family (Bold, Light, Regular)
- **Icons**: Expo Vector Icons (MaterialCommunityIcons, Ionicons, Entypo, Feather, AntDesign, FontAwesome)
- **Storage**: AsyncStorage for persistence

## 📁 Project Structure

```
Amazon-Clone/
├── app/                          # Expo Router file-based routes
│   ├── _layout.tsx              # Root layout with providers
│   ├── index.tsx                # Entry point (redirects to tabs)
│   ├── (tabs)/                  # Main tab navigation
│   │   ├── _layout.tsx          # Tab layout with header
│   │   ├── index.tsx            # Home screen
│   │   ├── profile.tsx          # User profile
│   │   └── cart.tsx             # Shopping cart
│   ├── (auth)/                  # Authentication flow
│   │   ├── _layout.tsx          # Auth stack layout
│   │   ├── index.tsx            # Sign in screen
│   │   └── signup.tsx           # Sign up with OTP
│   ├── (buyer_zone)/            # Buyer-specific screens
│   │   ├── _layout.tsx          # Buyer stack layout
│   │   ├── location.tsx         # Delivery address management
│   │   ├── my_order.tsx         # Order history
│   │   ├── buy_here.tsx         # Checkout/buy screen
│   │   └── thanks_buying.tsx    # Order confirmation
│   ├── (seller_zone)/           # Seller-specific screens
│   │   ├── _layout.tsx          # Seller tabs layout
│   │   ├── seller_page.tsx      # Seller dashboard
│   │   └── product_ordered.tsx  # Order management
│   ├── (search)/                # Search functionality
│   │   ├── _layout.tsx          # Search stack layout
│   │   └── index.tsx            # Search results
│   └── create_product/          # Product creation
│       ├── _layout.tsx          # Create product layout
│       └── index.tsx            # Product creation form
├── components/                   # Reusable UI components
│   └── Shared/
│       ├── header/              # Header components
│       │   ├── Header.tsx       # Main header with search/tabs
│       │   ├── HeaderSearch.tsx # Search bar component
│       │   ├── HeaderTabs.tsx   # Horizontal tab navigation
│       │   ├── HeaderTitleBack.tsx # Title & back button
│       │   └── GradientBackground.tsx # Gradient background
│       ├── Screen/              # Screen-level components
│       │   ├── ProductCard.tsx       # Cart product item
│       │   ├── ProductDealCard.tsx   # Home deal product card
│       │   ├── HomeCarousel.tsx      # Auto-scrolling banner carousel
│       │   ├── HomeSuggestions.tsx   # Horizontal suggestion scroll
│       │   ├── MyProductCard.tsx     # Seller product management card
│       │   ├── MyOrderedCard.tsx     # Seller order management card
│       │   ├── OrderCard.tsx         # Buyer order history card
│       │   ├── ProfileUnauthoredBanner.tsx # Unauthenticated profile banner
│       │   ├── OtpNumInput.tsx       # OTP input for auth
│       │   └── BottomSheetComponent.tsx # Profile bottom sheet
│       ├── DeliveryLocation.tsx # Delivery location button
│       └── DefaultButton.tsx    # Primary/secondary button
├── store/                        # Redux store & slices
│   ├── index.ts                 # Store configuration with persistence
│   └── slices/
│       ├── authSlice.ts         # Authentication state
│       ├── cartSlice.ts         # Shopping cart state
│       └── shippedCountSlice.ts # Seller unshipped order count
├── types/                        # TypeScript interfaces
│   ├── index.ts                 # Product type
│   └── order.ts                 # Order type
├── utils/                        # Utility functions
│   ├── constant.ts              # Font constants
│   ├── offPercentage.ts         # Discount calculation
│   ├── imageUpload.ts           # Image upload to Supabase Storage
│   ├── glbUpload.ts             # 3D model (.glb) upload
│   ├── getUnShippedCount.ts     # Fetch unshipped order count
│   └── deliveryDate.ts          # Delivery date calculation
├── hooks/                        # Custom React hooks
│   └── useDebouncedCallback.tsx # Debounced callback hook
├── supabase.ts                   # Supabase client configuration
├── assets/                       # Static assets (images, fonts, icons)
├── .env                          # Environment variables (Supabase keys)
├── app.json                      # Expo configuration
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript configuration
├── babel.config.js               # Babel configuration
├── eslint.config.js              # ESLint configuration
└── eas.json                      # EAS Build configuration
```

## 🛣️ Routes & Navigation

### Main Tab Navigation (`/(tabs)`)
| Route | Screen | Description |
|-------|--------|-------------|
| `/` | `index.tsx` | Home screen with deals, carousel, suggestions |
| `/profile` | `profile.tsx` | User profile, orders, seller zone access |
| `/cart` | `cart.tsx` | Shopping cart with checkout |

### Authentication (`/(auth)`)
| Route | Screen | Description |
|-------|--------|-------------|
| `/(auth)` | `index.tsx` | Email/password sign in (2-step) |
| `/(auth)/signup` | `signup.tsx` | Email OTP → Password registration (3-step) |

### Buyer Zone (`/(buyer_zone)`)
| Route | Screen | Description |
|-------|--------|-------------|
| `/(buyer_zone)/location` | `location.tsx` | Name & delivery address management |
| `/(buyer_zone)/my_order` | `my_order.tsx` | Order history with status |
| `/(buyer_zone)/buy_here` | `buy_here.tsx` | Product checkout with address & payment |
| `/(buyer_zone)/thanks_buying` | `thanks_buying.tsx` | Order success confirmation |

### Seller Zone (`/(seller_zone)`)
| Route | Screen | Description |
|-------|--------|-------------|
| `/(seller_zone)/seller_page` | `seller_page.tsx` | Seller dashboard with product list & create |
| `/(seller_zone)/product_ordered` | `product_ordered.tsx` | Order management with shipped toggle |

### Other Routes
| Route | Screen | Description |
|-------|--------|-------------|
| `/(search)` | `index.tsx` | Product search with query param |
| `/create_product` | `index.tsx` | Create new product (image + 3D model) |
| `/product/:id` | (dynamic) | Product detail (to be implemented) |

## 🗄️ Database Schema (Supabase)

### Tables

**profiles** (extends auth.users)
- `id` (uuid, PK, references auth.users)
- `full_name` (text)
- `location` (text)
- `is_seller` (boolean, default: false)

**products**
- `id` (serial, PK)
- `name` (text)
- `amountInStock` (integer)
- `currentPrice` (numeric)
- `previousPrice` (numeric)
- `deliveryPrice` (numeric)
- `deliveryInDays` (integer)
- `isAmazonChoice` (boolean)
- `imageUrl` (text, nullable)
- `model3DUrl` (text, nullable)
- `user_id` (integer, references profiles.id)
- `created_at` (timestamptz)

**orders**
- `id` (serial, PK)
- `product_name` (text)
- `image` (text)
- `buyer_id` (integer, references profiles.id)
- `current_price` (numeric)
- `delivery_date` (text)
- `is_shipped` (boolean, default: false)
- `delivery_address` (text)
- `delivery_price` (numeric)
- `seller_id` (integer, references profiles.id)
- `quantity` (integer)
- `total` (numeric)
- `created_at` (timestamptz)

### Storage Buckets
- `user-data/user-uploads/` - Product images & 3D models

## 🔐 Authentication Flow

1. **Sign In** (`/(auth)`):
   - Step 1: Enter email
   - Step 2: Enter password → `supabase.auth.signInWithPassword()`
   - On success: Store session in Redux, redirect to `/(tabs)`

2. **Sign Up** (`/(auth)/signup`):
   - Step 1: Enter email → `supabase.auth.signInWithOtp()`
   - Step 2: Enter 6-digit OTP → `supabase.auth.verifyOtp()`
   - Step 3: Set password → `supabase.auth.updateUser({ password })`
   - On success: Redirect to `/(tabs)`

3. **Session Persistence**: 
   - Auto-refresh on app foreground
   - Session stored in Redux + AsyncStorage via Supabase config
   - Auth state changes synced to Redux via `onAuthStateChange`

## 🛒 Cart & Checkout Flow

### Cart State (Redux Persisted)
- `items`: Array of `{ product: Product, quantity: number }`
- `subTotal`: Calculated sum of `currentPrice * quantity`

### Adding to Cart
- From `ProductDealCard` (home) → navigates to `/product/:id` (TODO)
- From `ProductCard` (cart screen) → `addItem` action

### Checkout Process (`/(buyer_zone)/buy_here`)
1. Fetch user address from profiles
2. Display delivery info, product summary, price breakdown
3. On "Pay with cash on delivery":
   - Insert order into `orders` table
   - Clear cart via `persistor.purge()` + `clearCart()`
   - Navigate to `/(buyer_zone)/thanks_buying`

## 🏪 Seller Features

### Product Management (`/(seller_zone)/seller_page`)
- List own products (query by `user_id`)
- Delete products
- Navigate to `/create_product` to add new

### Create Product (`/create_product`)
- Form: name, stock, prices, delivery, Amazon Choice toggle
- Image picker (expo-image-picker) → upload to Supabase Storage
- 3D model picker (expo-document-picker, .glb) → upload to Supabase Storage
- Insert into `products` table with `user_id`

### Order Management (`/(seller_zone)/product_ordered`)
- List orders where `seller_id` = current user
- Toggle `is_shipped` via checkbox
- Updates `shippedCount` in Redux for badge notification

## 🎨 UI Components

### Header System
- **Header.tsx**: Smart header supporting both Stack & Tab navigators
  - Shows search bar + tabs on tabs screens
  - Shows back button + title on stack screens
- **HeaderSearch.tsx**: Debounced search input, navigates to `/(search)`
- **HeaderTabs.tsx**: Horizontal scrollable tabs (Home uses: Alexa Lists, Prime, Video)
- **GradientBackground.tsx**: Animated gradient behind header

### Home Screen Components
- **HomeCarousel**: Auto-scrolling 7-image banner (3s interval) with dot indicators
- **HomeSuggestions**: Horizontal "New Arrivals" scroll with 8 images
- **ProductDealCard**: Deal card showing discount % & "Limited deal" badge

### Cart & Order Components
- **ProductCard**: Cart item with quantity +/- & delete
- **OrderCard**: Buyer order history with status (shipped/pending)
- **MyOrderedCard**: Seller order card with shipped checkbox toggle

### Auth Components
- **OtpNumInput**: 6-digit numeric OTP input (react-native-otp-entry)
- **BottomSheetComponent**: Profile menu with Sign Out (@gorhom/bottom-sheet)

## 🔧 Utility Functions

| Utility | Purpose |
|---------|---------|
| `offPercentage(current, previous)` | Calculate discount percentage |
| `deliveryDate(days)` | Calculate delivery date string from days |
| `imageUpload(uri, token)` | Upload image to Supabase Storage |
| `glbUpload(uri, token)` | Upload .glb 3D model to Supabase Storage |
| `getUnShippedCount(sellerId)` | Count unshipped orders for seller badge |
| `useDebouncedCallback` | Debounce hook for search input |

## 📦 State Management (Redux)

### Store Structure
```typescript
{
  auth: { session: Session | null },           // Not persisted
  cart: { items: CartItem[], subTotal: number }, // Persisted
  shippedCount: { shippedCount: number }       // Not persisted
}
```

### Actions
- **authSlice**: `setSession(session)`
- **cartSlice**: `addItem`, `removeItem`, `clearCart`
- **shippedCountSlice**: `setShippedCount(count)`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Expo CLI: `npm install -g expo-cli`
- Supabase account & project

### Installation
```bash
# Clone & install
cd Amazon-Clone
npm install

# Configure environment
cp .env.example .env  # Add your Supabase keys

# Start development server
npm start
```

### Environment Variables (`.env`)
```
EXPO_PUBLIC_SUPABASE_URL=your_supabase_project_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Running on Devices
```bash
npm run android  # Android emulator
npm run ios      # iOS simulator
npm run web      # Web browser
```

## 📱 Key Features Implemented

- ✅ User authentication (email/password + OTP signup)
- ✅ Persistent session management
- ✅ Home screen with carousel, suggestions, deals
- ✅ Product search with debounced query
- ✅ Shopping cart with quantity management
- ✅ Checkout flow with address & cash on delivery
- ✅ Order history for buyers
- ✅ Seller dashboard with product CRUD
- ✅ Seller order management with shipped toggle
- ✅ 3D model (.glb) upload support
- ✅ Image upload to Supabase Storage
- ✅ Redux persistence for cart
- ✅ Bottom sheet profile menu
- ✅ Delivery address management
- ✅ Amazon-style UI with custom fonts

## 🔮 Future Enhancements

- [ ] Product detail screen (`/product/:id`)
- [ ] Payment gateway integration
- [ ] Push notifications for order updates
- [ ] Product reviews & ratings
- [ ] Wishlist functionality
- [ ] Category filtering
- [ ] Order tracking with real-time updates
- [ ] Seller analytics dashboard
- [ ] Multi-language support
- [ ] Dark mode

## 📄 License

This project is MIT licensed - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ using Expo, React Native, Supabase, and Redux Toolkit.
