/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailPositionPosPermissions } from './RetailPositionPosPermissions';
import { RetailPositionPosPermissionsRequestBuilder } from './RetailPositionPosPermissionsRequestBuilder';
import { RetailPosPermissionGroupsApi } from './RetailPosPermissionGroupsApi';
import { NoYes } from './NoYes';
import { RetailAllowPrintingReceiptCopy } from './RetailAllowPrintingReceiptCopy';
import { RetailPriceOverride } from './RetailPriceOverride';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailPositionPosPermissionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailPositionPosPermissions<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): RetailPositionPosPermissionsApi<DeSerializersT> {
    return new RetailPositionPosPermissionsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailPosPermissionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_POS_PERMISSION_GROUP: OneToOneLink<
      RetailPositionPosPermissions<DeSerializersT>,
      DeSerializersT,
      RetailPosPermissionGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [RetailPosPermissionGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_POS_PERMISSION_GROUP: new OneToOneLink(
        'RetailPosPermissionGroup',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = RetailPositionPosPermissions;

  requestBuilder(): RetailPositionPosPermissionsRequestBuilder<DeSerializersT> {
    return new RetailPositionPosPermissionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailPositionPosPermissions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailPositionPosPermissions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailPositionPosPermissions<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof RetailPositionPosPermissions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailPositionPosPermissions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_KIT_DISASSEMBLY: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_RETRIEVE_ORDER: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_PRINTING_RECEIPT_COPY: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      RetailAllowPrintingReceiptCopy,
      true,
      true
    >;
    POS_PERMISSION_GROUP_ID: OrderableEdmTypeField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_USE_SHARED_SHIFT: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_PASSWORD_CHANGE: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_SKIP_HEALTH_CHECK_ERROR: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CREATE_TRANSFER_ORDER: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_TRANSACTION_VOIDING: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_SKIP_FISCAL_REGISTRATION: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_TRANSACTION_SUSPENSION: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_TASK_GUIDES: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_CLOSE_SHIFT: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CREATE_ORDER: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_RESET_PASSWORD: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_MULTIPLE_LOGONS: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STORE_INVENTORY_USER: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_POST_STOCK_COUNTING: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_DISCOUNT_TOTAL_PERCENTAGE: OrderableEdmTypeField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_SALE_OUTSIDE_ASSORTMENT: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_POST_INVENTORY_ADJUSTMENT: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_THE_SETUP_OF_A_LABEL_PRINTER: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANAGER_PRIVILEGES: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CHANGE_NO_VOID: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_POSTPONE_REGISTRATION: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CONFIRM_PURCHASE_ORDER: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_TASK_MANAGEMENT: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_MANAGE_SHARED_SHIFT: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_MASS_ACTIVATION: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CREATE_PURCHASE_ORDER: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_FLOATING_DECLARATION: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_PRICE_OVERRIDE: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      RetailPriceOverride,
      true,
      true
    >;
    ALLOW_SKIP_REGISTRATION_OR_MARK_AS_REGISTERED: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANAGE_DEVICE: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_BLIND_CLOSE: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_LINE_RETURN_AMOUNT: OrderableEdmTypeField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_EDIT_ORDER: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_REJECT_ORDER: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_TENDER_DECLARATION: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_X_REPORT_PRINTING: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CHANGE_PERIPHERAL_STATION: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_TOTAL_RETURN_AMOUNT: OrderableEdmTypeField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_SALES_TAX_CHANGE: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_ACCEPT_ORDER: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAXIMUM_LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_Z_REPORT_PRINTING: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_MULTIPLE_SHIFT_LOGON: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    OPEN_DRAWER_WITHOUT_SALE: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VIEW_TIMECLOCK_ENTRIES: EnumField<
      RetailPositionPosPermissions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailPosPermissionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_POS_PERMISSION_GROUP: OneToOneLink<
      RetailPositionPosPermissions<DeSerializersT>,
      DeSerializersT,
      RetailPosPermissionGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailPositionPosPermissions<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maximumDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MaximumDiscountPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowKitDisassembly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_KIT_DISASSEMBLY: fieldBuilder.buildEnumField(
          'AllowKitDisassembly',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowRetrieveOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_RETRIEVE_ORDER: fieldBuilder.buildEnumField(
          'AllowRetrieveOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowPrintingReceiptCopy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_PRINTING_RECEIPT_COPY: fieldBuilder.buildEnumField(
          'AllowPrintingReceiptCopy',
          RetailAllowPrintingReceiptCopy,
          true
        ),
        /**
         * Static representation of the {@link posPermissionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_PERMISSION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PosPermissionGroupId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowUseSharedShift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_USE_SHARED_SHIFT: fieldBuilder.buildEnumField(
          'AllowUseSharedShift',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowPasswordChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_PASSWORD_CHANGE: fieldBuilder.buildEnumField(
          'AllowPasswordChange',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowSkipHealthCheckError} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_SKIP_HEALTH_CHECK_ERROR: fieldBuilder.buildEnumField(
          'AllowSkipHealthCheckError',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowCreateTransferOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CREATE_TRANSFER_ORDER: fieldBuilder.buildEnumField(
          'AllowCreateTransferOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowTransactionVoiding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_TRANSACTION_VOIDING: fieldBuilder.buildEnumField(
          'AllowTransactionVoiding',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowSkipFiscalRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_SKIP_FISCAL_REGISTRATION: fieldBuilder.buildEnumField(
          'AllowSkipFiscalRegistration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowTransactionSuspension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_TRANSACTION_SUSPENSION: fieldBuilder.buildEnumField(
          'AllowTransactionSuspension',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowTaskGuides} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_TASK_GUIDES: fieldBuilder.buildEnumField(
          'AllowTaskGuides',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumTotalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumTotalDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowCloseShift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CLOSE_SHIFT: fieldBuilder.buildEnumField(
          'AllowCloseShift',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowCreateOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CREATE_ORDER: fieldBuilder.buildEnumField(
          'AllowCreateOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowResetPassword} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_RESET_PASSWORD: fieldBuilder.buildEnumField(
          'AllowResetPassword',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link allowMultipleLogons} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MULTIPLE_LOGONS: fieldBuilder.buildEnumField(
          'AllowMultipleLogons',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link storeInventoryUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_INVENTORY_USER: fieldBuilder.buildEnumField(
          'StoreInventoryUser',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowPostStockCounting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_POST_STOCK_COUNTING: fieldBuilder.buildEnumField(
          'AllowPostStockCounting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumDiscountTotalPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_DISCOUNT_TOTAL_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MaximumDiscountTotalPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowSaleOutsideAssortment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_SALE_OUTSIDE_ASSORTMENT: fieldBuilder.buildEnumField(
          'AllowSaleOutsideAssortment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowPostInventoryAdjustment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_POST_INVENTORY_ADJUSTMENT: fieldBuilder.buildEnumField(
          'AllowPostInventoryAdjustment',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowTheSetupOfALabelPrinter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_THE_SETUP_OF_A_LABEL_PRINTER: fieldBuilder.buildEnumField(
          'AllowTheSetupOfALabelPrinter',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link managerPrivileges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGER_PRIVILEGES: fieldBuilder.buildEnumField(
          'ManagerPrivileges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowChangeNoVoid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CHANGE_NO_VOID: fieldBuilder.buildEnumField(
          'AllowChangeNoVoid',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowPostponeRegistration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_POSTPONE_REGISTRATION: fieldBuilder.buildEnumField(
          'AllowPostponeRegistration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowConfirmPurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CONFIRM_PURCHASE_ORDER: fieldBuilder.buildEnumField(
          'AllowConfirmPurchaseOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowTaskManagement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_TASK_MANAGEMENT: fieldBuilder.buildEnumField(
          'AllowTaskManagement',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowManageSharedShift} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MANAGE_SHARED_SHIFT: fieldBuilder.buildEnumField(
          'AllowManageSharedShift',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowMassActivation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MASS_ACTIVATION: fieldBuilder.buildEnumField(
          'AllowMassActivation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowCreatePurchaseOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CREATE_PURCHASE_ORDER: fieldBuilder.buildEnumField(
          'AllowCreatePurchaseOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowFloatingDeclaration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_FLOATING_DECLARATION: fieldBuilder.buildEnumField(
          'AllowFloatingDeclaration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowPriceOverride} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_PRICE_OVERRIDE: fieldBuilder.buildEnumField(
          'AllowPriceOverride',
          RetailPriceOverride,
          true
        ),
        /**
         * Static representation of the {@link allowSkipRegistrationOrMarkAsRegistered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_SKIP_REGISTRATION_OR_MARK_AS_REGISTERED:
          fieldBuilder.buildEnumField(
            'AllowSkipRegistrationOrMarkAsRegistered',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link manageDevice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MANAGE_DEVICE: fieldBuilder.buildEnumField('ManageDevice', NoYes, true),
        /**
         * Static representation of the {@link allowBlindClose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_BLIND_CLOSE: fieldBuilder.buildEnumField(
          'AllowBlindClose',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumLineReturnAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LINE_RETURN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumLineReturnAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowEditOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EDIT_ORDER: fieldBuilder.buildEnumField(
          'AllowEditOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowRejectOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_REJECT_ORDER: fieldBuilder.buildEnumField(
          'AllowRejectOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowTenderDeclaration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_TENDER_DECLARATION: fieldBuilder.buildEnumField(
          'AllowTenderDeclaration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowXReportPrinting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_X_REPORT_PRINTING: fieldBuilder.buildEnumField(
          'AllowXReportPrinting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowChangePeripheralStation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_CHANGE_PERIPHERAL_STATION: fieldBuilder.buildEnumField(
          'AllowChangePeripheralStation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumTotalReturnAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_TOTAL_RETURN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumTotalReturnAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowSalesTaxChange} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_SALES_TAX_CHANGE: fieldBuilder.buildEnumField(
          'AllowSalesTaxChange',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowAcceptOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_ACCEPT_ORDER: fieldBuilder.buildEnumField(
          'AllowAcceptOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maximumLineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaximumLineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link allowZReportPrinting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_Z_REPORT_PRINTING: fieldBuilder.buildEnumField(
          'AllowZReportPrinting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowMultipleShiftLogon} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MULTIPLE_SHIFT_LOGON: fieldBuilder.buildEnumField(
          'AllowMultipleShiftLogon',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link openDrawerWithoutSale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPEN_DRAWER_WITHOUT_SALE: fieldBuilder.buildEnumField(
          'OpenDrawerWithoutSale',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link viewTimeclockEntries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VIEW_TIMECLOCK_ENTRIES: fieldBuilder.buildEnumField(
          'ViewTimeclockEntries',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailPositionPosPermissions)
      };
    }

    return this._schema;
  }
}
