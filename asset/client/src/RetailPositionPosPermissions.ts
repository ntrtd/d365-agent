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
import type { RetailPositionPosPermissionsApi } from './RetailPositionPosPermissionsApi';
import { NoYes } from './NoYes';
import { RetailAllowPrintingReceiptCopy } from './RetailAllowPrintingReceiptCopy';
import { RetailPriceOverride } from './RetailPriceOverride';
import {
  RetailPosPermissionGroups,
  RetailPosPermissionGroupsType
} from './RetailPosPermissionGroups';

/**
 * This class represents the entity "RetailPositionPosPermissions" of service "d365_metadata".
 */
export class RetailPositionPosPermissions<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailPositionPosPermissionsType<T>
{
  /**
   * Technical entity name for RetailPositionPosPermissions.
   */
  static override _entityName = 'RetailPositionPosPermissions';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailPositionPosPermissions entity.
   */
  static _keys = ['PositionId'];
  /**
   * Position Id.
   */
  declare positionId: DeserializedType<T, 'Edm.String'>;
  /**
   * Maximum Discount Percentage.
   */
  declare maximumDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Kit Disassembly.
   * @nullable
   */
  declare allowKitDisassembly?: NoYes | null;
  /**
   * Allow Retrieve Order.
   * @nullable
   */
  declare allowRetrieveOrder?: NoYes | null;
  /**
   * Allow Printing Receipt Copy.
   * @nullable
   */
  declare allowPrintingReceiptCopy?: RetailAllowPrintingReceiptCopy | null;
  /**
   * Pos Permission Group Id.
   * @nullable
   */
  declare posPermissionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Use Shared Shift.
   * @nullable
   */
  declare allowUseSharedShift?: NoYes | null;
  /**
   * Allow Password Change.
   * @nullable
   */
  declare allowPasswordChange?: NoYes | null;
  /**
   * Allow Skip Health Check Error.
   * @nullable
   */
  declare allowSkipHealthCheckError?: NoYes | null;
  /**
   * Allow Create Transfer Order.
   * @nullable
   */
  declare allowCreateTransferOrder?: NoYes | null;
  /**
   * Allow Transaction Voiding.
   * @nullable
   */
  declare allowTransactionVoiding?: NoYes | null;
  /**
   * Allow Skip Fiscal Registration.
   * @nullable
   */
  declare allowSkipFiscalRegistration?: NoYes | null;
  /**
   * Allow Transaction Suspension.
   * @nullable
   */
  declare allowTransactionSuspension?: NoYes | null;
  /**
   * Allow Task Guides.
   * @nullable
   */
  declare allowTaskGuides?: NoYes | null;
  /**
   * Maximum Total Discount Amount.
   */
  declare maximumTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Close Shift.
   * @nullable
   */
  declare allowCloseShift?: NoYes | null;
  /**
   * Allow Create Order.
   * @nullable
   */
  declare allowCreateOrder?: NoYes | null;
  /**
   * Allow Reset Password.
   * @nullable
   */
  declare allowResetPassword?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Allow Multiple Logons.
   * @nullable
   */
  declare allowMultipleLogons?: NoYes | null;
  /**
   * Store Inventory User.
   * @nullable
   */
  declare storeInventoryUser?: NoYes | null;
  /**
   * Allow Post Stock Counting.
   * @nullable
   */
  declare allowPostStockCounting?: NoYes | null;
  /**
   * Maximum Discount Total Percentage.
   */
  declare maximumDiscountTotalPercentage: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Sale Outside Assortment.
   * @nullable
   */
  declare allowSaleOutsideAssortment?: NoYes | null;
  /**
   * Allow Post Inventory Adjustment.
   * @nullable
   */
  declare allowPostInventoryAdjustment?: NoYes | null;
  /**
   * Allow The Setup Of A Label Printer.
   * @nullable
   */
  declare allowTheSetupOfALabelPrinter?: NoYes | null;
  /**
   * Manager Privileges.
   * @nullable
   */
  declare managerPrivileges?: NoYes | null;
  /**
   * Allow Change No Void.
   * @nullable
   */
  declare allowChangeNoVoid?: NoYes | null;
  /**
   * Allow Postpone Registration.
   * @nullable
   */
  declare allowPostponeRegistration?: NoYes | null;
  /**
   * Allow Confirm Purchase Order.
   * @nullable
   */
  declare allowConfirmPurchaseOrder?: NoYes | null;
  /**
   * Allow Task Management.
   * @nullable
   */
  declare allowTaskManagement?: NoYes | null;
  /**
   * Allow Manage Shared Shift.
   * @nullable
   */
  declare allowManageSharedShift?: NoYes | null;
  /**
   * Allow Mass Activation.
   * @nullable
   */
  declare allowMassActivation?: NoYes | null;
  /**
   * Allow Create Purchase Order.
   * @nullable
   */
  declare allowCreatePurchaseOrder?: NoYes | null;
  /**
   * Allow Floating Declaration.
   * @nullable
   */
  declare allowFloatingDeclaration?: NoYes | null;
  /**
   * Allow Price Override.
   * @nullable
   */
  declare allowPriceOverride?: RetailPriceOverride | null;
  /**
   * Allow Skip Registration Or Mark As Registered.
   * @nullable
   */
  declare allowSkipRegistrationOrMarkAsRegistered?: NoYes | null;
  /**
   * Manage Device.
   * @nullable
   */
  declare manageDevice?: NoYes | null;
  /**
   * Allow Blind Close.
   * @nullable
   */
  declare allowBlindClose?: NoYes | null;
  /**
   * Maximum Line Return Amount.
   */
  declare maximumLineReturnAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Edit Order.
   * @nullable
   */
  declare allowEditOrder?: NoYes | null;
  /**
   * Allow Reject Order.
   * @nullable
   */
  declare allowRejectOrder?: NoYes | null;
  /**
   * Allow Tender Declaration.
   * @nullable
   */
  declare allowTenderDeclaration?: NoYes | null;
  /**
   * Allow X Report Printing.
   * @nullable
   */
  declare allowXReportPrinting?: NoYes | null;
  /**
   * Allow Change Peripheral Station.
   * @nullable
   */
  declare allowChangePeripheralStation?: NoYes | null;
  /**
   * Maximum Total Return Amount.
   */
  declare maximumTotalReturnAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Sales Tax Change.
   * @nullable
   */
  declare allowSalesTaxChange?: NoYes | null;
  /**
   * Allow Accept Order.
   * @nullable
   */
  declare allowAcceptOrder?: NoYes | null;
  /**
   * Maximum Line Discount Amount.
   */
  declare maximumLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Allow Z Report Printing.
   * @nullable
   */
  declare allowZReportPrinting?: NoYes | null;
  /**
   * Allow Multiple Shift Logon.
   * @nullable
   */
  declare allowMultipleShiftLogon?: NoYes | null;
  /**
   * Open Drawer Without Sale.
   * @nullable
   */
  declare openDrawerWithoutSale?: NoYes | null;
  /**
   * View Timeclock Entries.
   * @nullable
   */
  declare viewTimeclockEntries?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link RetailPosPermissionGroups} entity.
   */
  declare retailPosPermissionGroup?: RetailPosPermissionGroups<T> | null;

  constructor(_entityApi: RetailPositionPosPermissionsApi<T>) {
    super(_entityApi);
  }
}

export interface RetailPositionPosPermissionsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  positionId: DeserializedType<T, 'Edm.String'>;
  maximumDiscountPercentage: DeserializedType<T, 'Edm.Decimal'>;
  allowKitDisassembly?: NoYes | null;
  allowRetrieveOrder?: NoYes | null;
  allowPrintingReceiptCopy?: RetailAllowPrintingReceiptCopy | null;
  posPermissionGroupId?: DeserializedType<T, 'Edm.String'> | null;
  allowUseSharedShift?: NoYes | null;
  allowPasswordChange?: NoYes | null;
  allowSkipHealthCheckError?: NoYes | null;
  allowCreateTransferOrder?: NoYes | null;
  allowTransactionVoiding?: NoYes | null;
  allowSkipFiscalRegistration?: NoYes | null;
  allowTransactionSuspension?: NoYes | null;
  allowTaskGuides?: NoYes | null;
  maximumTotalDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  allowCloseShift?: NoYes | null;
  allowCreateOrder?: NoYes | null;
  allowResetPassword?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  allowMultipleLogons?: NoYes | null;
  storeInventoryUser?: NoYes | null;
  allowPostStockCounting?: NoYes | null;
  maximumDiscountTotalPercentage: DeserializedType<T, 'Edm.Decimal'>;
  allowSaleOutsideAssortment?: NoYes | null;
  allowPostInventoryAdjustment?: NoYes | null;
  allowTheSetupOfALabelPrinter?: NoYes | null;
  managerPrivileges?: NoYes | null;
  allowChangeNoVoid?: NoYes | null;
  allowPostponeRegistration?: NoYes | null;
  allowConfirmPurchaseOrder?: NoYes | null;
  allowTaskManagement?: NoYes | null;
  allowManageSharedShift?: NoYes | null;
  allowMassActivation?: NoYes | null;
  allowCreatePurchaseOrder?: NoYes | null;
  allowFloatingDeclaration?: NoYes | null;
  allowPriceOverride?: RetailPriceOverride | null;
  allowSkipRegistrationOrMarkAsRegistered?: NoYes | null;
  manageDevice?: NoYes | null;
  allowBlindClose?: NoYes | null;
  maximumLineReturnAmount: DeserializedType<T, 'Edm.Decimal'>;
  allowEditOrder?: NoYes | null;
  allowRejectOrder?: NoYes | null;
  allowTenderDeclaration?: NoYes | null;
  allowXReportPrinting?: NoYes | null;
  allowChangePeripheralStation?: NoYes | null;
  maximumTotalReturnAmount: DeserializedType<T, 'Edm.Decimal'>;
  allowSalesTaxChange?: NoYes | null;
  allowAcceptOrder?: NoYes | null;
  maximumLineDiscountAmount: DeserializedType<T, 'Edm.Decimal'>;
  allowZReportPrinting?: NoYes | null;
  allowMultipleShiftLogon?: NoYes | null;
  openDrawerWithoutSale?: NoYes | null;
  viewTimeclockEntries?: NoYes | null;
  retailPosPermissionGroup?: RetailPosPermissionGroupsType<T> | null;
}
