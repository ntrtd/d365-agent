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
import type { RetailTerminalsApi } from './RetailTerminalsApi';
import { NoYes } from './NoYes';
import { RetailStaffTerminalTotal } from './RetailStaffTerminalTotal';
import { RetailTerminalStoreBase } from './RetailTerminalStoreBase';
import { RetailPosAutoExitMethod } from './RetailPosAutoExitMethod';
import { RetailNoneItemBarcodeItem } from './RetailNoneItemBarcodeItem';
import { RetailClosingStatus } from './RetailClosingStatus';
import { RetailCnpProcessingConfiguration } from './RetailCnpProcessingConfiguration';
import { RetailTerminalOperationMode } from './RetailTerminalOperationMode';
import { RetailNoneTotalAllBase } from './RetailNoneTotalAllBase';
import {
  RetailVisualProfiles,
  RetailVisualProfilesType
} from './RetailVisualProfiles';
import { RetailStores, RetailStoresType } from './RetailStores';
import { DimensionSets, DimensionSetsType } from './DimensionSets';
import {
  RetailHardwareProfiles,
  RetailHardwareProfilesType
} from './RetailHardwareProfiles';

/**
 * This class represents the entity "RetailTerminals" of service "d365_metadata".
 */
export class RetailTerminals<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements RetailTerminalsType<T>
{
  /**
   * Technical entity name for RetailTerminals.
   */
  static override _entityName = 'RetailTerminals';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTerminals entity.
   */
  static _keys = ['TerminalNumber'];
  /**
   * Terminal Number.
   */
  declare terminalNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Select Hardware Station On Tendering.
   * @nullable
   */
  declare selectHardwareStationOnTendering?: NoYes | null;
  /**
   * Number Sequence Group.
   * @nullable
   */
  declare numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Auto Logoff Timeout.
   */
  declare autoLogoffTimeout: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Statement Method.
   * @nullable
   */
  declare statementMethod?: RetailStaffTerminalTotal | null;
  /**
   * Return In Transaction.
   * @nullable
   */
  declare returnInTransaction?: NoYes | null;
  /**
   * Terminal Statement.
   * @nullable
   */
  declare terminalStatement?: NoYes | null;
  /**
   * Receipt Setup Location.
   * @nullable
   */
  declare receiptSetupLocation?: RetailTerminalStoreBase | null;
  /**
   * Hardware Profile.
   * @nullable
   */
  declare hardwareProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Receipt Printing Default Off.
   * @nullable
   */
  declare receiptPrintingDefaultOff?: NoYes | null;
  /**
   * Offline Database Profile Name.
   * @nullable
   */
  declare offlineDatabaseProfileName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Support Offline.
   * @nullable
   */
  declare supportOffline?: NoYes | null;
  /**
   * Max Receipt Text Length.
   */
  declare maxReceiptTextLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Layout Id.
   * @nullable
   */
  declare layoutId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Customer Display Text 1.
   * @nullable
   */
  declare customerDisplayText1?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Only Total In Suspended Transaction.
   * @nullable
   */
  declare onlyTotalInSuspendedTransaction?: NoYes | null;
  /**
   * Receipt Barcode.
   * @nullable
   */
  declare receiptBarcode?: NoYes | null;
  /**
   * Auto Exit Method.
   * @nullable
   */
  declare autoExitMethod?: RetailPosAutoExitMethod | null;
  /**
   * Print Tax Refund Checks.
   * @nullable
   */
  declare printTaxRefundChecks?: NoYes | null;
  /**
   * Playback Recording.
   * @nullable
   */
  declare playbackRecording?: NoYes | null;
  /**
   * Open Drawer At Last In Last Out.
   * @nullable
   */
  declare openDrawerAtLastInLastOut?: NoYes | null;
  /**
   * Product Number On Receipt.
   * @nullable
   */
  declare productNumberOnReceipt?: RetailNoneItemBarcodeItem | null;
  /**
   * Exit After Each Transaction.
   * @nullable
   */
  declare exitAfterEachTransaction?: NoYes | null;
  /**
   * Self Checkout.
   * @nullable
   */
  declare selfCheckout?: NoYes | null;
  /**
   * Closing Status.
   * @nullable
   */
  declare closingStatus?: RetailClosingStatus | null;
  /**
   * Location.
   * @nullable
   */
  declare location?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Card Not Present Processing Configuration.
   * @nullable
   */
  declare cardNotPresentProcessingConfiguration?: RetailCnpProcessingConfiguration | null;
  /**
   * Number Of Top Bottom Lines.
   */
  declare numberOfTopBottomLines: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Electronic Funds Transfer Tender Type Id Default.
   * @nullable
   */
  declare electronicFundsTransferTenderTypeIdDefault?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Store Number.
   * @nullable
   */
  declare storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Visual Profile.
   * @nullable
   */
  declare visualProfile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Retail Terminal Operation Mode.
   * @nullable
   */
  declare retailTerminalOperationMode?: RetailTerminalOperationMode | null;
  /**
   * Manager Key On Return.
   * @nullable
   */
  declare managerKeyOnReturn?: NoYes | null;
  /**
   * Stand Alone.
   * @nullable
   */
  declare standAlone?: NoYes | null;
  /**
   * Slip If Return.
   * @nullable
   */
  declare slipIfReturn?: RetailNoneTotalAllBase | null;
  /**
   * Electronic Funds Transfer Terminal.
   * @nullable
   */
  declare electronicFundsTransferTerminal?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Update Service Port.
   */
  declare updateServicePort: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Default Dimension Legal Entity.
   * @nullable
   */
  declare defaultDimensionLegalEntity?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Create Recording.
   * @nullable
   */
  declare createRecording?: NoYes | null;
  /**
   * Max Display Text Length.
   */
  declare maxDisplayTextLength: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Store Number For Electronic Funds Transfer.
   * @nullable
   */
  declare storeNumberForElectronicFundsTransfer?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Default Dimension Display Value.
   * @nullable
   */
  declare defaultDimensionDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Customer Display Text 2.
   * @nullable
   */
  declare customerDisplayText2?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Internet Protocol Address.
   * @nullable
   */
  declare internetProtocolAddress?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link RetailVisualProfiles} entity.
   */
  declare retailVisualProfile?: RetailVisualProfiles<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailStores} entity.
   */
  declare retailStore?: RetailStores<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionSets} entity.
   */
  declare dimensionSet?: DimensionSets<T> | null;
  /**
   * One-to-one navigation property to the {@link RetailHardwareProfiles} entity.
   */
  declare retailHardwareProfile?: RetailHardwareProfiles<T> | null;

  constructor(_entityApi: RetailTerminalsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTerminalsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  terminalNumber: DeserializedType<T, 'Edm.String'>;
  selectHardwareStationOnTendering?: NoYes | null;
  numberSequenceGroup?: DeserializedType<T, 'Edm.String'> | null;
  autoLogoffTimeout: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  statementMethod?: RetailStaffTerminalTotal | null;
  returnInTransaction?: NoYes | null;
  terminalStatement?: NoYes | null;
  receiptSetupLocation?: RetailTerminalStoreBase | null;
  hardwareProfile?: DeserializedType<T, 'Edm.String'> | null;
  receiptPrintingDefaultOff?: NoYes | null;
  offlineDatabaseProfileName?: DeserializedType<T, 'Edm.String'> | null;
  supportOffline?: NoYes | null;
  maxReceiptTextLength: DeserializedType<T, 'Edm.Int32'>;
  layoutId?: DeserializedType<T, 'Edm.String'> | null;
  customerDisplayText1?: DeserializedType<T, 'Edm.String'> | null;
  onlyTotalInSuspendedTransaction?: NoYes | null;
  receiptBarcode?: NoYes | null;
  autoExitMethod?: RetailPosAutoExitMethod | null;
  printTaxRefundChecks?: NoYes | null;
  playbackRecording?: NoYes | null;
  openDrawerAtLastInLastOut?: NoYes | null;
  productNumberOnReceipt?: RetailNoneItemBarcodeItem | null;
  exitAfterEachTransaction?: NoYes | null;
  selfCheckout?: NoYes | null;
  closingStatus?: RetailClosingStatus | null;
  location?: DeserializedType<T, 'Edm.String'> | null;
  cardNotPresentProcessingConfiguration?: RetailCnpProcessingConfiguration | null;
  numberOfTopBottomLines: DeserializedType<T, 'Edm.Int32'>;
  electronicFundsTransferTenderTypeIdDefault?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  storeNumber?: DeserializedType<T, 'Edm.String'> | null;
  visualProfile?: DeserializedType<T, 'Edm.String'> | null;
  retailTerminalOperationMode?: RetailTerminalOperationMode | null;
  managerKeyOnReturn?: NoYes | null;
  standAlone?: NoYes | null;
  slipIfReturn?: RetailNoneTotalAllBase | null;
  electronicFundsTransferTerminal?: DeserializedType<T, 'Edm.String'> | null;
  updateServicePort: DeserializedType<T, 'Edm.Int32'>;
  defaultDimensionLegalEntity?: DeserializedType<T, 'Edm.String'> | null;
  createRecording?: NoYes | null;
  maxDisplayTextLength: DeserializedType<T, 'Edm.Int32'>;
  storeNumberForElectronicFundsTransfer?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  defaultDimensionDisplayValue?: DeserializedType<T, 'Edm.String'> | null;
  customerDisplayText2?: DeserializedType<T, 'Edm.String'> | null;
  internetProtocolAddress?: DeserializedType<T, 'Edm.String'> | null;
  retailVisualProfile?: RetailVisualProfilesType<T> | null;
  retailStore?: RetailStoresType<T> | null;
  dimensionSet?: DimensionSetsType<T> | null;
  retailHardwareProfile?: RetailHardwareProfilesType<T> | null;
}
