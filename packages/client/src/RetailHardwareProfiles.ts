/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { RetailHardwareProfilesApi } from './RetailHardwareProfilesApi';
import { RetailOposNone } from './RetailOposNone';
import { NoYes } from './NoYes';
import { RetailProfileVersion } from './RetailProfileVersion';
import { RetailManufacturerNone } from './RetailManufacturerNone';
import { Abc } from './Abc';
import { RetailNoneDownloadFlash } from './RetailNoneDownloadFlash';
import { RetailLeftCenterRight } from './RetailLeftCenterRight';
import { RetailEftConfiguration } from './RetailEftConfiguration';
import { RetailDualDisplayTypeBase } from './RetailDualDisplayTypeBase';
import { RetailCashChanger } from './RetailCashChanger';
import { RetailOposLogin } from './RetailOposLogin';
import { RetailPeripheralType } from './RetailPeripheralType';
import { RetailExternalNone } from './RetailExternalNone';
import { RetailDrawer } from './RetailDrawer';
import { RetailRfidScannerTypeBase } from './RetailRfidScannerTypeBase';
import { RetailPinPadType } from './RetailPinPadType';
import { RetailTerminals, RetailTerminalsType } from './RetailTerminals';

/**
 * This class represents the entity "RetailHardwareProfiles" of service "d365_metadata".
 */
export class RetailHardwareProfiles<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailHardwareProfilesType<T>
{
  /**
   * Technical entity name for RetailHardwareProfiles.
   */
  static override _entityName = 'RetailHardwareProfiles';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailHardwareProfiles entity.
   */
  static _keys = ['ProfileId'];
  /**
   * Profile Id.
   */
  declare profileId: DeserializedType<T, 'Edm.String'>;
  /**
   * Device Name.
   * @nullable
   */
  declare deviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Funds Transfer Password.
   * @nullable
   */
  declare electronicFundsTransferPassword?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Drawer 2 Model.
   * @nullable
   */
  declare drawer2Model?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Hard Total.
   * @nullable
   */
  declare hardTotal?: RetailOposNone | null;
  /**
   * Printer 1 Make.
   * @nullable
   */
  declare printer1Make?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer 1 Characterset.
   */
  declare printer1Characterset: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Electronic Funds Transfer Maximum Card Payments.
   */
  declare electronicFundsTransferMaximumCardPayments: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Hard Total Device Name.
   * @nullable
   */
  declare hardTotalDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drawer 1 Make.
   * @nullable
   */
  declare drawer1Make?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scale Description.
   * @nullable
   */
  declare scaleDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer 2 Device Name.
   * @nullable
   */
  declare printer2DeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Closed Line 2.
   * @nullable
   */
  declare displayClosedLine2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Funds Transfer Description.
   * @nullable
   */
  declare electronicFundsTransferDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Delay For Linked Items.
   */
  declare delayForLinkedItems: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Use Electronic Funds Transfer Service.
   * @nullable
   */
  declare useElectronicFundsTransferService?: NoYes | null;
  /**
   * Drawer 2 Use Cash Drawer Pool.
   * @nullable
   */
  declare drawer2UseCashDrawerPool?: NoYes | null;
  /**
   * Hard Total Description.
   * @nullable
   */
  declare hardTotalDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Profile Version.
   * @nullable
   */
  declare profileVersion?: RetailProfileVersion | null;
  /**
   * Printer 1 Receipt Profile Id.
   * @nullable
   */
  declare printer1ReceiptProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Printer.
   * @nullable
   */
  declare fiscalPrinter?: RetailManufacturerNone | null;
  /**
   * Radio Frequency Id Device Name.
   * @nullable
   */
  declare radioFrequencyIdDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Capture Extra Data.
   * @nullable
   */
  declare captureExtraData?: Abc | null;
  /**
   * Scanner 1.
   * @nullable
   */
  declare scanner1?: RetailOposNone | null;
  /**
   * Pharmacy Host.
   * @nullable
   */
  declare pharmacyHost?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dual Display Receipt Percentage.
   */
  declare dualDisplayReceiptPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Signature Capture Form Name.
   * @nullable
   */
  declare signatureCaptureFormName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Magnetic Stripe Reader Make.
   * @nullable
   */
  declare magneticStripeReaderMake?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dual Display Image Interval.
   */
  declare dualDisplayImageInterval: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Electronic Funds Transfer Company Id.
   * @nullable
   */
  declare electronicFundsTransferCompanyId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Printer 2 Receipt Profile Id.
   * @nullable
   */
  declare printer2ReceiptProfileId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Device.
   * @nullable
   */
  declare displayDevice?: RetailOposNone | null;
  /**
   * Magnetic Ink Character Recognition.
   * @nullable
   */
  declare magneticInkCharacterRecognition?: RetailOposNone | null;
  /**
   * Drawer 2 Make.
   * @nullable
   */
  declare drawer2Make?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Logo.
   * @nullable
   */
  declare logo?: RetailNoneDownloadFlash | null;
  /**
   * Display Linked Item.
   * @nullable
   */
  declare displayLinkedItem?: NoYes | null;
  /**
   * Logo Alignment.
   * @nullable
   */
  declare logoAlignment?: RetailLeftCenterRight | null;
  /**
   * Pharmacy.
   * @nullable
   */
  declare pharmacy?: NoYes | null;
  /**
   * Display Description.
   * @nullable
   */
  declare displayDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Form Y Position.
   */
  declare formYPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Drawer 2 Description.
   * @nullable
   */
  declare drawer2Description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Printer Config Id.
   * @nullable
   */
  declare fiscalPrinterConfigId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Funds Transfer Configuration.
   * @nullable
   */
  declare electronicFundsTransferConfiguration?: RetailEftConfiguration | null;
  /**
   * Dual Display Type.
   * @nullable
   */
  declare dualDisplayType?: RetailDualDisplayTypeBase | null;
  /**
   * Cash Changer.
   * @nullable
   */
  declare cashChanger?: RetailCashChanger | null;
  /**
   * Printer 2 Logo Alignment.
   * @nullable
   */
  declare printer2LogoAlignment?: RetailLeftCenterRight | null;
  /**
   * Printer 2 Description.
   * @nullable
   */
  declare printer2Description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Keylock.
   * @nullable
   */
  declare keylock?: RetailOposLogin | null;
  /**
   * Pin Pad Model.
   * @nullable
   */
  declare pinPadModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drawer 2 Device Name.
   * @nullable
   */
  declare drawer2DeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer 2 Model.
   * @nullable
   */
  declare printer2Model?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Funds Transfer Server Port.
   * @nullable
   */
  declare electronicFundsTransferServerPort?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Scale Device Name.
   * @nullable
   */
  declare scaleDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer 1 Description.
   * @nullable
   */
  declare printer1Description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Character Set.
   */
  declare displayCharacterSet: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Magnetic Ink Character Recognition Driver Name.
   * @nullable
   */
  declare magneticInkCharacterRecognitionDriverName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Printer 2 Binary Conversion.
   * @nullable
   */
  declare printer2BinaryConversion?: NoYes | null;
  /**
   * Printer 2.
   * @nullable
   */
  declare printer2?: RetailPeripheralType | null;
  /**
   * Scanner 2 Device Name.
   * @nullable
   */
  declare scanner2DeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Invoice Lines.
   */
  declare maxInvoiceLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Keylock Description.
   * @nullable
   */
  declare keylockDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Funds Transfer.
   * @nullable
   */
  declare electronicFundsTransfer?: RetailExternalNone | null;
  /**
   * Fiscal Register Config Id.
   * @nullable
   */
  declare fiscalRegisterConfigId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scanner 2.
   * @nullable
   */
  declare scanner2?: RetailOposNone | null;
  /**
   * Cash Changer Port Settings.
   * @nullable
   */
  declare cashChangerPortSettings?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drawer 1 Description.
   * @nullable
   */
  declare drawer1Description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Signature Capture Model.
   * @nullable
   */
  declare signatureCaptureModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Funds Transfer Data.
   * @nullable
   */
  declare electronicFundsTransferData?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Timeout In Sec.
   */
  declare timeoutInSec: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Display Terminal Closed.
   * @nullable
   */
  declare displayTerminalClosed?: NoYes | null;
  /**
   * Scanner 1 Device Name.
   * @nullable
   */
  declare scanner1DeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drawer 1.
   * @nullable
   */
  declare drawer1?: RetailDrawer | null;
  /**
   * Drawer 2.
   * @nullable
   */
  declare drawer2?: RetailDrawer | null;
  /**
   * Printer 2 Document Insert Removal Timeout.
   */
  declare printer2DocumentInsertRemovalTimeout: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Closed Caption Television Port.
   */
  declare closedCaptionTelevisionPort: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Scanner 2 Description.
   * @nullable
   */
  declare scanner2Description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Magnetic Stripe Reader Device Name.
   * @nullable
   */
  declare magneticStripeReaderDeviceName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Magnetic Ink Character Recognition Description.
   * @nullable
   */
  declare magneticInkCharacterRecognitionDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Electronic Funds Transfer Connector Name.
   * @nullable
   */
  declare electronicFundsTransferConnectorName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Printer 1 Model.
   * @nullable
   */
  declare printer1Model?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pin Pad Make.
   * @nullable
   */
  declare pinPadMake?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scanner 1 Decode Scan Data.
   * @nullable
   */
  declare scanner1DecodeScanData?: NoYes | null;
  /**
   * Magnetic Stripe Reader Description.
   * @nullable
   */
  declare magneticStripeReaderDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Scale.
   * @nullable
   */
  declare scale?: RetailOposNone | null;
  /**
   * Magnetic Stripe Reader Start Track 2 After.
   */
  declare magneticStripeReaderStartTrack2After: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Display Total Text.
   * @nullable
   */
  declare displayTotalText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Magnetic Stripe Reader Start Track 1.
   * @nullable
   */
  declare magneticStripeReaderStartTrack1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Printer 2 Logo Bitmap.
   * @nullable
   */
  declare printer2LogoBitmap?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Drawer 1 Device Name.
   * @nullable
   */
  declare drawer1DeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Signature Capture.
   * @nullable
   */
  declare signatureCapture?: RetailOposNone | null;
  /**
   * Dual Display Browser Url.
   * @nullable
   */
  declare dualDisplayBrowserUrl?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Signature Capture Description.
   * @nullable
   */
  declare signatureCaptureDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fiscal Printer Description.
   * @nullable
   */
  declare fiscalPrinterDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Use External Payments Device.
   * @nullable
   */
  declare useExternalPaymentsDevice?: NoYes | null;
  /**
   * Signature Capture Device Name.
   * @nullable
   */
  declare signatureCaptureDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Merged Self Service Package Reference.
   */
  declare mergedSelfServicePackageReference: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Magnetic Stripe Reader End Track 2 Sentinel.
   * @nullable
   */
  declare magneticStripeReaderEndTrack2Sentinel?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Radio Frequency Id Scanner Type.
   * @nullable
   */
  declare radioFrequencyIdScannerType?: RetailRfidScannerTypeBase | null;
  /**
   * Print Binary Conversion.
   * @nullable
   */
  declare printBinaryConversion?: NoYes | null;
  /**
   * Drawer 1 Model.
   * @nullable
   */
  declare drawer1Model?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closed Caption Television Camera.
   * @nullable
   */
  declare closedCaptionTelevisionCamera?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Image Path.
   * @nullable
   */
  declare imagePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Funds Transfer Connector Properties.
   * @nullable
   */
  declare electronicFundsTransferConnectorProperties?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Scanner 1 Description.
   * @nullable
   */
  declare scanner1Description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Display Binary Conversion.
   * @nullable
   */
  declare displayBinaryConversion?: NoYes | null;
  /**
   * Display Balance Text.
   * @nullable
   */
  declare displayBalanceText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer 2 Make.
   * @nullable
   */
  declare printer2Make?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Funds Transfer Merchant Id.
   * @nullable
   */
  declare electronicFundsTransferMerchantId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fiscal Register.
   * @nullable
   */
  declare fiscalRegister?: RetailManufacturerNone | null;
  /**
   * Printer 1 Document Insert Removal Timeout.
   */
  declare printer1DocumentInsertRemovalTimeout: DeserializedType<
    T,
    'Edm.Int32'
  >;
  /**
   * Magnetic Stripe Reader End Track 1 Sentinel.
   * @nullable
   */
  declare magneticStripeReaderEndTrack1Sentinel?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fiscal Register Description.
   * @nullable
   */
  declare fiscalRegisterDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Drawer 1 Use Cash Drawer Pool.
   * @nullable
   */
  declare drawer1UseCashDrawerPool?: NoYes | null;
  /**
   * Is Manual Input Allowed.
   * @nullable
   */
  declare isManualInputAllowed?: NoYes | null;
  /**
   * Display Closed Line 1.
   * @nullable
   */
  declare displayClosedLine1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pharmacy Port.
   */
  declare pharmacyPort: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Cash Changer Initial Settings.
   * @nullable
   */
  declare cashChangerInitialSettings?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closed Caption Television Host Name.
   * @nullable
   */
  declare closedCaptionTelevisionHostName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Signature Capture Make.
   * @nullable
   */
  declare signatureCaptureMake?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closed Caption Television.
   * @nullable
   */
  declare closedCaptionTelevision?: NoYes | null;
  /**
   * Logo Bitmap.
   * @nullable
   */
  declare logoBitmap?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * Pin Pad.
   * @nullable
   */
  declare pinPad?: RetailPinPadType | null;
  /**
   * Keyboard Mapping Id.
   * @nullable
   */
  declare keyboardMappingId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer 2 Characterset.
   */
  declare printer2Characterset: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Electronic Funds Transfer User Id.
   * @nullable
   */
  declare electronicFundsTransferUserId?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Fiscal Printer Device Name.
   * @nullable
   */
  declare fiscalPrinterDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Funds Transfer Server Name.
   * @nullable
   */
  declare electronicFundsTransferServerName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Dual Display Image Path.
   * @nullable
   */
  declare dualDisplayImagePath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Scanner 2 Decode Scan Data.
   * @nullable
   */
  declare scanner2DecodeScanData?: NoYes | null;
  /**
   * Device Description.
   * @nullable
   */
  declare deviceDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Screen Keyboard.
   * @nullable
   */
  declare screenKeyboard?: NoYes | null;
  /**
   * Magnetic Stripe Reader Model.
   * @nullable
   */
  declare magneticStripeReaderModel?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Keylock Device Name.
   * @nullable
   */
  declare keylockDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Fiscal Register Device Name.
   * @nullable
   */
  declare fiscalRegisterDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer 2 Logo.
   * @nullable
   */
  declare printer2Logo?: RetailNoneDownloadFlash | null;
  /**
   * Radio Frequency Id Description.
   * @nullable
   */
  declare radioFrequencyIdDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Magnetic Stripe Reader Separator 1.
   * @nullable
   */
  declare magneticStripeReaderSeparator1?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Magnetic Stripe Reader.
   * @nullable
   */
  declare magneticStripeReader?: RetailOposNone | null;
  /**
   * Printer 1.
   * @nullable
   */
  declare printer1?: RetailPeripheralType | null;
  /**
   * Dual Display.
   * @nullable
   */
  declare dualDisplay?: NoYes | null;
  /**
   * Show Picture.
   * @nullable
   */
  declare showPicture?: NoYes | null;
  /**
   * Display Device Name.
   * @nullable
   */
  declare displayDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Form X Position.
   */
  declare formXPosition: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Pin Pad Device Name.
   * @nullable
   */
  declare pinPadDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Pin Pad Description.
   * @nullable
   */
  declare pinPadDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Printer 1 Device Name.
   * @nullable
   */
  declare printer1DeviceName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link RetailTerminals} entity.
   */
  declare retailTerminal: RetailTerminals<T>[];

  constructor(_entityApi: RetailHardwareProfilesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailHardwareProfilesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  profileId: DeserializedType<T, 'Edm.String'>;
  deviceName?: DeserializedType<T, 'Edm.String'> | null;
  electronicFundsTransferPassword?: DeserializedType<T, 'Edm.String'> | null;
  drawer2Model?: DeserializedType<T, 'Edm.String'> | null;
  hardTotal?: RetailOposNone | null;
  printer1Make?: DeserializedType<T, 'Edm.String'> | null;
  printer1Characterset: DeserializedType<T, 'Edm.Int32'>;
  electronicFundsTransferMaximumCardPayments: DeserializedType<T, 'Edm.Int32'>;
  hardTotalDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  drawer1Make?: DeserializedType<T, 'Edm.String'> | null;
  scaleDescription?: DeserializedType<T, 'Edm.String'> | null;
  printer2DeviceName?: DeserializedType<T, 'Edm.String'> | null;
  displayClosedLine2?: DeserializedType<T, 'Edm.String'> | null;
  electronicFundsTransferDescription?: DeserializedType<T, 'Edm.String'> | null;
  delayForLinkedItems: DeserializedType<T, 'Edm.Int32'>;
  useElectronicFundsTransferService?: NoYes | null;
  drawer2UseCashDrawerPool?: NoYes | null;
  hardTotalDescription?: DeserializedType<T, 'Edm.String'> | null;
  profileVersion?: RetailProfileVersion | null;
  printer1ReceiptProfileId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPrinter?: RetailManufacturerNone | null;
  radioFrequencyIdDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  captureExtraData?: Abc | null;
  scanner1?: RetailOposNone | null;
  pharmacyHost?: DeserializedType<T, 'Edm.String'> | null;
  dualDisplayReceiptPercentage: DeserializedType<T, 'Edm.Decimal'>;
  signatureCaptureFormName?: DeserializedType<T, 'Edm.String'> | null;
  magneticStripeReaderMake?: DeserializedType<T, 'Edm.String'> | null;
  dualDisplayImageInterval: DeserializedType<T, 'Edm.Int32'>;
  electronicFundsTransferCompanyId?: DeserializedType<T, 'Edm.String'> | null;
  printer2ReceiptProfileId?: DeserializedType<T, 'Edm.String'> | null;
  displayDevice?: RetailOposNone | null;
  magneticInkCharacterRecognition?: RetailOposNone | null;
  drawer2Make?: DeserializedType<T, 'Edm.String'> | null;
  logo?: RetailNoneDownloadFlash | null;
  displayLinkedItem?: NoYes | null;
  logoAlignment?: RetailLeftCenterRight | null;
  pharmacy?: NoYes | null;
  displayDescription?: DeserializedType<T, 'Edm.String'> | null;
  formYPosition: DeserializedType<T, 'Edm.Int32'>;
  drawer2Description?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPrinterConfigId?: DeserializedType<T, 'Edm.String'> | null;
  electronicFundsTransferConfiguration?: RetailEftConfiguration | null;
  dualDisplayType?: RetailDualDisplayTypeBase | null;
  cashChanger?: RetailCashChanger | null;
  printer2LogoAlignment?: RetailLeftCenterRight | null;
  printer2Description?: DeserializedType<T, 'Edm.String'> | null;
  keylock?: RetailOposLogin | null;
  pinPadModel?: DeserializedType<T, 'Edm.String'> | null;
  drawer2DeviceName?: DeserializedType<T, 'Edm.String'> | null;
  printer2Model?: DeserializedType<T, 'Edm.String'> | null;
  electronicFundsTransferServerPort?: DeserializedType<T, 'Edm.String'> | null;
  scaleDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  printer1Description?: DeserializedType<T, 'Edm.String'> | null;
  displayCharacterSet: DeserializedType<T, 'Edm.Int32'>;
  magneticInkCharacterRecognitionDriverName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  printer2BinaryConversion?: NoYes | null;
  printer2?: RetailPeripheralType | null;
  scanner2DeviceName?: DeserializedType<T, 'Edm.String'> | null;
  maxInvoiceLines: DeserializedType<T, 'Edm.Int32'>;
  keylockDescription?: DeserializedType<T, 'Edm.String'> | null;
  electronicFundsTransfer?: RetailExternalNone | null;
  fiscalRegisterConfigId?: DeserializedType<T, 'Edm.String'> | null;
  scanner2?: RetailOposNone | null;
  cashChangerPortSettings?: DeserializedType<T, 'Edm.String'> | null;
  drawer1Description?: DeserializedType<T, 'Edm.String'> | null;
  signatureCaptureModel?: DeserializedType<T, 'Edm.String'> | null;
  electronicFundsTransferData?: DeserializedType<T, 'Edm.String'> | null;
  timeoutInSec: DeserializedType<T, 'Edm.Int32'>;
  displayTerminalClosed?: NoYes | null;
  scanner1DeviceName?: DeserializedType<T, 'Edm.String'> | null;
  drawer1?: RetailDrawer | null;
  drawer2?: RetailDrawer | null;
  printer2DocumentInsertRemovalTimeout: DeserializedType<T, 'Edm.Int32'>;
  closedCaptionTelevisionPort: DeserializedType<T, 'Edm.Int32'>;
  scanner2Description?: DeserializedType<T, 'Edm.String'> | null;
  magneticStripeReaderDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  magneticInkCharacterRecognitionDescription?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  electronicFundsTransferConnectorName?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  printer1Model?: DeserializedType<T, 'Edm.String'> | null;
  pinPadMake?: DeserializedType<T, 'Edm.String'> | null;
  scanner1DecodeScanData?: NoYes | null;
  magneticStripeReaderDescription?: DeserializedType<T, 'Edm.String'> | null;
  scale?: RetailOposNone | null;
  magneticStripeReaderStartTrack2After: DeserializedType<T, 'Edm.Int32'>;
  displayTotalText?: DeserializedType<T, 'Edm.String'> | null;
  magneticStripeReaderStartTrack1?: DeserializedType<T, 'Edm.String'> | null;
  printer2LogoBitmap?: DeserializedType<T, 'Edm.Binary'> | null;
  drawer1DeviceName?: DeserializedType<T, 'Edm.String'> | null;
  signatureCapture?: RetailOposNone | null;
  dualDisplayBrowserUrl?: DeserializedType<T, 'Edm.String'> | null;
  signatureCaptureDescription?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPrinterDescription?: DeserializedType<T, 'Edm.String'> | null;
  useExternalPaymentsDevice?: NoYes | null;
  signatureCaptureDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  mergedSelfServicePackageReference: DeserializedType<T, 'Edm.Int64'>;
  magneticStripeReaderEndTrack2Sentinel?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  radioFrequencyIdScannerType?: RetailRfidScannerTypeBase | null;
  printBinaryConversion?: NoYes | null;
  drawer1Model?: DeserializedType<T, 'Edm.String'> | null;
  closedCaptionTelevisionCamera?: DeserializedType<T, 'Edm.String'> | null;
  imagePath?: DeserializedType<T, 'Edm.String'> | null;
  name?: DeserializedType<T, 'Edm.String'> | null;
  electronicFundsTransferConnectorProperties?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  scanner1Description?: DeserializedType<T, 'Edm.String'> | null;
  displayBinaryConversion?: NoYes | null;
  displayBalanceText?: DeserializedType<T, 'Edm.String'> | null;
  printer2Make?: DeserializedType<T, 'Edm.String'> | null;
  electronicFundsTransferMerchantId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalRegister?: RetailManufacturerNone | null;
  printer1DocumentInsertRemovalTimeout: DeserializedType<T, 'Edm.Int32'>;
  magneticStripeReaderEndTrack1Sentinel?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  fiscalRegisterDescription?: DeserializedType<T, 'Edm.String'> | null;
  drawer1UseCashDrawerPool?: NoYes | null;
  isManualInputAllowed?: NoYes | null;
  displayClosedLine1?: DeserializedType<T, 'Edm.String'> | null;
  pharmacyPort: DeserializedType<T, 'Edm.Int32'>;
  cashChangerInitialSettings?: DeserializedType<T, 'Edm.String'> | null;
  closedCaptionTelevisionHostName?: DeserializedType<T, 'Edm.String'> | null;
  signatureCaptureMake?: DeserializedType<T, 'Edm.String'> | null;
  closedCaptionTelevision?: NoYes | null;
  logoBitmap?: DeserializedType<T, 'Edm.Binary'> | null;
  pinPad?: RetailPinPadType | null;
  keyboardMappingId?: DeserializedType<T, 'Edm.String'> | null;
  printer2Characterset: DeserializedType<T, 'Edm.Int32'>;
  electronicFundsTransferUserId?: DeserializedType<T, 'Edm.String'> | null;
  fiscalPrinterDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  electronicFundsTransferServerName?: DeserializedType<T, 'Edm.String'> | null;
  dualDisplayImagePath?: DeserializedType<T, 'Edm.String'> | null;
  scanner2DecodeScanData?: NoYes | null;
  deviceDescription?: DeserializedType<T, 'Edm.String'> | null;
  screenKeyboard?: NoYes | null;
  magneticStripeReaderModel?: DeserializedType<T, 'Edm.String'> | null;
  keylockDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  fiscalRegisterDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  printer2Logo?: RetailNoneDownloadFlash | null;
  radioFrequencyIdDescription?: DeserializedType<T, 'Edm.String'> | null;
  magneticStripeReaderSeparator1?: DeserializedType<T, 'Edm.String'> | null;
  magneticStripeReader?: RetailOposNone | null;
  printer1?: RetailPeripheralType | null;
  dualDisplay?: NoYes | null;
  showPicture?: NoYes | null;
  displayDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  formXPosition: DeserializedType<T, 'Edm.Int32'>;
  pinPadDeviceName?: DeserializedType<T, 'Edm.String'> | null;
  pinPadDescription?: DeserializedType<T, 'Edm.String'> | null;
  printer1DeviceName?: DeserializedType<T, 'Edm.String'> | null;
  retailTerminal: RetailTerminalsType<T>[];
}
