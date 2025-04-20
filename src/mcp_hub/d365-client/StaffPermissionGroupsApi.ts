/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { StaffPermissionGroups } from './StaffPermissionGroups';
import { StaffPermissionGroupsRequestBuilder } from './StaffPermissionGroupsRequestBuilder';
import { NoYes } from './NoYes';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class StaffPermissionGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<StaffPermissionGroups<DeSerializersT>, DeSerializersT>
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
  ): StaffPermissionGroupsApi<DeSerializersT> {
    return new StaffPermissionGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = StaffPermissionGroups;

  requestBuilder(): StaffPermissionGroupsRequestBuilder<DeSerializersT> {
    return new StaffPermissionGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    StaffPermissionGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<StaffPermissionGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    StaffPermissionGroups<DeSerializersT>,
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
    typeof StaffPermissionGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        StaffPermissionGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERMISSION_GROUP_ID: OrderableEdmTypeField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_ALLOW_OPEN_DRAWER_ONLY: EnumField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_DISCOUNT_PERCENT: OrderableEdmTypeField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    MAX_TOTAL_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_ALLOW_FLOATING_TENDER_DECLARATION: EnumField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ALLOW_Z_REPORT_PRINTING: EnumField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ALLOW_TRANSACTION_SUSPENSION: EnumField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALLOW_PRICE_OVERRIDE: EnumField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      RetailPriceOverride,
      true,
      true
    >;
    MAX_LINE_DISCOUNT_AMOUNT: OrderableEdmTypeField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_ALLOW_TRANSACTION_VOIDING: EnumField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PERMISSION_GROUP_NAME: OrderableEdmTypeField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MAX_TOTAL_DISCOUNT_PERCENT: OrderableEdmTypeField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    IS_MANAGER_PRIVILEGES: EnumField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ALLOW_TENDER_DECLARATION: EnumField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ALLOW_X_REPORT_PRINTING: EnumField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_ALLOW_CHANGE_NO_VOID: EnumField<
      StaffPermissionGroups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<StaffPermissionGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link permissionGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERMISSION_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'PermissionGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isAllowOpenDrawerOnly} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_OPEN_DRAWER_ONLY: fieldBuilder.buildEnumField(
          'IsAllowOpenDrawerOnly',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxDiscountPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_DISCOUNT_PERCENT: fieldBuilder.buildEdmTypeField(
          'MaxDiscountPercent',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link isAllowFloatingTenderDeclaration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_FLOATING_TENDER_DECLARATION: fieldBuilder.buildEnumField(
          'IsAllowFloatingTenderDeclaration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isAllowZReportPrinting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_Z_REPORT_PRINTING: fieldBuilder.buildEnumField(
          'IsAllowZReportPrinting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isAllowTransactionSuspension} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_TRANSACTION_SUSPENSION: fieldBuilder.buildEnumField(
          'IsAllowTransactionSuspension',
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
         * Static representation of the {@link maxLineDiscountAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_LINE_DISCOUNT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MaxLineDiscountAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isAllowTransactionVoiding} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_TRANSACTION_VOIDING: fieldBuilder.buildEnumField(
          'IsAllowTransactionVoiding',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link permissionGroupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERMISSION_GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'PermissionGroupName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link maxTotalDiscountPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_TOTAL_DISCOUNT_PERCENT: fieldBuilder.buildEdmTypeField(
          'MaxTotalDiscountPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link isManagerPrivileges} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MANAGER_PRIVILEGES: fieldBuilder.buildEnumField(
          'IsManagerPrivileges',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isAllowTenderDeclaration} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_TENDER_DECLARATION: fieldBuilder.buildEnumField(
          'IsAllowTenderDeclaration',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isAllowXReportPrinting} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_X_REPORT_PRINTING: fieldBuilder.buildEnumField(
          'IsAllowXReportPrinting',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link isAllowChangeNoVoid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ALLOW_CHANGE_NO_VOID: fieldBuilder.buildEnumField(
          'IsAllowChangeNoVoid',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', StaffPermissionGroups)
      };
    }

    return this._schema;
  }
}
