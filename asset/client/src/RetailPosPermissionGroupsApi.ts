/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailPosPermissionGroups } from './RetailPosPermissionGroups';
import { RetailPosPermissionGroupsRequestBuilder } from './RetailPosPermissionGroupsRequestBuilder';
import { RetailJobPosPermissionGroupsApi } from './RetailJobPosPermissionGroupsApi';
import { RetailPositionPosPermissionsApi } from './RetailPositionPosPermissionsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class RetailPosPermissionGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailPosPermissionGroups<DeSerializersT>, DeSerializersT>
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
  ): RetailPosPermissionGroupsApi<DeSerializersT> {
    return new RetailPosPermissionGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link retailJobPosPermissionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_JOB_POS_PERMISSION_GROUP: OneToOneLink<
      RetailPosPermissionGroups<DeSerializersT>,
      DeSerializersT,
      RetailJobPosPermissionGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailPositionPosPermission} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_POSITION_POS_PERMISSION: OneToManyLink<
      RetailPosPermissionGroups<DeSerializersT>,
      DeSerializersT,
      RetailPositionPosPermissionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      RetailJobPosPermissionGroupsApi<DeSerializersT>,
      RetailPositionPosPermissionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      RETAIL_JOB_POS_PERMISSION_GROUP: new OneToOneLink(
        'RetailJobPosPermissionGroup',
        this,
        linkedApis[0]
      ),
      RETAIL_POSITION_POS_PERMISSION: new OneToManyLink(
        'RetailPositionPosPermission',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = RetailPosPermissionGroups;

  requestBuilder(): RetailPosPermissionGroupsRequestBuilder<DeSerializersT> {
    return new RetailPosPermissionGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailPosPermissionGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailPosPermissionGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailPosPermissionGroups<DeSerializersT>,
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
    typeof RetailPosPermissionGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailPosPermissionGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POS_PERMISSION_GROUP_ID: OrderableEdmTypeField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAX_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_KIT_DISASSEMBLY: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALLOW_RETRIEVE_ORDER: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_PRINTING_RECEIPT_COPY: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      RetailAllowPrintingReceiptCopy,
      true,
      true
    >;
    ALLOW_USE_SHARED_SHIFT: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_PASSWORD_CHANGE: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_SKIP_HEALTH_CHECK_ERROR: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CREATE_TRANSFER_ORDER: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_TRANSACTION_VOIDING: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_SKIP_FISCAL_REGISTRATION: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_TRANSACTION_SUSPENSION: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_TASK_GUIDES: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_LINE_RETURN_AMOUNT: OrderableEdmTypeField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_CLOSE_SHIFT: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CREATE_ORDER: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_RESET_PASSWORD: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_POST_STOCK_COUNTING: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_SETUP_LABEL_PRINTER: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_SALE_OUTSIDE_ASSORTMENT: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USE_HANDHELD: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_POST_INVENTORY_ADJUSTMENT: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANAGER_PRIVILEGES: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CHANGE_NO_VOID: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_POSTPONE_REGISTRATION: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CONFIRM_PURCHASE_ORDER: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_TASK_MANAGEMENT: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_TOTAL_DISCOUNT_PERCENTAGE: OrderableEdmTypeField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_MANAGE_SHARED_SHIFT: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_OPEN_DRAWER_ONLY: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_MASS_ACTIVATION: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CREATE_PURCHASE_ORDER: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_PRICE_OVERRIDE: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      RetailPriceOverride,
      true,
      true
    >;
    ALLOW_SKIP_REGISTRATION_OR_MARK_AS_REGISTERED: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MANAGE_DEVICE: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_MULTIPLE_LOGINS: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_BLIND_CLOSE: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_EDIT_ORDER: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_FLOATING_TENDER_DECLARATION: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_REJECT_ORDER: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_TOTAL_RETURN_AMOUNT: OrderableEdmTypeField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALLOW_TENDER_DECLARATION: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_X_REPORT_PRINTING: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_CHANGE_PERIPHERAL_STATION: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_SALES_TAX_CHANGE: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_ACCEPT_ORDER: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_VIEW_TIMECLOCK_ENTRIES: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_Z_REPORT_PRINTING: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_MULTIPLE_SHIFT_LOGON: EnumField<
      RetailPosPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link retailJobPosPermissionGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_JOB_POS_PERMISSION_GROUP: OneToOneLink<
      RetailPosPermissionGroups<DeSerializersT>,
      DeSerializersT,
      RetailJobPosPermissionGroupsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link retailPositionPosPermission} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RETAIL_POSITION_POS_PERMISSION: OneToManyLink<
      RetailPosPermissionGroups<DeSerializersT>,
      DeSerializersT,
      RetailPositionPosPermissionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<RetailPosPermissionGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link posPermissionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POS_PERMISSION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PosPermissionGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maxDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MaxDiscountPercentage',
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
         * Static representation of the {@link maxLineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxLineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
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
         * Static representation of the {@link maxLineReturnAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_LINE_RETURN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxLineReturnAmount',
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
         * Static representation of the {@link allowPostStockCounting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_POST_STOCK_COUNTING: fieldBuilder.buildEnumField(
          'AllowPostStockCounting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowSetupLabelPrinter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_SETUP_LABEL_PRINTER: fieldBuilder.buildEnumField(
          'AllowSetupLabelPrinter',
          NoYes,
          true
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
         * Static representation of the {@link maxTotalDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_TOTAL_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxTotalDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link useHandheld} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_HANDHELD: fieldBuilder.buildEnumField('UseHandheld', NoYes, true),
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
         * Static representation of the {@link maxTotalDiscountPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_TOTAL_DISCOUNT_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MaxTotalDiscountPercentage',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link allowOpenDrawerOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_OPEN_DRAWER_ONLY: fieldBuilder.buildEnumField(
          'AllowOpenDrawerOnly',
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
         * Static representation of the {@link allowMultipleLogins} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_MULTIPLE_LOGINS: fieldBuilder.buildEnumField(
          'AllowMultipleLogins',
          NoYes,
          true
        ),
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
         * Static representation of the {@link allowEditOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_EDIT_ORDER: fieldBuilder.buildEnumField(
          'AllowEditOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link allowFloatingTenderDeclaration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_FLOATING_TENDER_DECLARATION: fieldBuilder.buildEnumField(
          'AllowFloatingTenderDeclaration',
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
         * Static representation of the {@link maxTotalReturnAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_TOTAL_RETURN_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxTotalReturnAmount',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link allowViewTimeclockEntries} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALLOW_VIEW_TIMECLOCK_ENTRIES: fieldBuilder.buildEnumField(
          'AllowViewTimeclockEntries',
          NoYes,
          true
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailPosPermissionGroups)
      };
    }

    return this._schema;
  }
}
