/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TaxPurchaseTaxTables } from './TaxPurchaseTaxTables';
import { TaxPurchaseTaxTablesRequestBuilder } from './TaxPurchaseTaxTablesRequestBuilder';
import { TaxCalcMode } from './TaxCalcMode';
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
export class TaxPurchaseTaxTablesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TaxPurchaseTaxTables<DeSerializersT>, DeSerializersT>
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
  ): TaxPurchaseTaxTablesApi<DeSerializersT> {
    return new TaxPurchaseTaxTablesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TaxPurchaseTaxTables;

  requestBuilder(): TaxPurchaseTaxTablesRequestBuilder<DeSerializersT> {
    return new TaxPurchaseTaxTablesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TaxPurchaseTaxTables<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TaxPurchaseTaxTables<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TaxPurchaseTaxTables<DeSerializersT>,
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
    typeof TaxPurchaseTaxTables,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TaxPurchaseTaxTables,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PURCHASE_DUTY: OrderableEdmTypeField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TAX_LIMIT_MIN: OrderableEdmTypeField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_AUTHORITY: OrderableEdmTypeField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERCENT: OrderableEdmTypeField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TAX_LIMIT_MAX: OrderableEdmTypeField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DUTY_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TAX_CALC_MODE: EnumField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      TaxCalcMode,
      true,
      true
    >;
    COST_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SETTLE_ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      TaxPurchaseTaxTables<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<TaxPurchaseTaxTables<DeSerializers>>;
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
         * Static representation of the {@link purchaseDuty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PURCHASE_DUTY: fieldBuilder.buildEdmTypeField(
          'PurchaseDuty',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link toDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_DATE: fieldBuilder.buildEdmTypeField(
          'ToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link taxLimitMin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_LIMIT_MIN: fieldBuilder.buildEdmTypeField(
          'TaxLimitMin',
          'Edm.Decimal',
          false
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
         * Static representation of the {@link taxAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_AUTHORITY: fieldBuilder.buildEdmTypeField(
          'TaxAuthority',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link percent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERCENT: fieldBuilder.buildEdmTypeField(
          'Percent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taxLimitMax} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_LIMIT_MAX: fieldBuilder.buildEdmTypeField(
          'TaxLimitMax',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link dutyAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUTY_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DutyAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taxCalcMode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_CALC_MODE: fieldBuilder.buildEnumField(
          'TaxCalcMode',
          TaxCalcMode,
          true
        ),
        /**
         * Static representation of the {@link costAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'CostAccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link settleAccountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLE_ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'SettleAccountDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TaxPurchaseTaxTables)
      };
    }

    return this._schema;
  }
}
