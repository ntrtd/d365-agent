/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdPeriods } from './WithholdPeriods';
import { WithholdPeriodsRequestBuilder } from './WithholdPeriodsRequestBuilder';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';
import { PeriodUnit } from './PeriodUnit';
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
export class WithholdPeriodsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdPeriods<DeSerializersT>, DeSerializersT>
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
  ): WithholdPeriodsApi<DeSerializersT> {
    return new WithholdPeriodsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = WithholdPeriods;

  requestBuilder(): WithholdPeriodsRequestBuilder<DeSerializersT> {
    return new WithholdPeriodsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdPeriods<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WithholdPeriods<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<WithholdPeriods<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof WithholdPeriods, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdPeriods,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SETTLEMENT_PERIOD: OrderableEdmTypeField<
      WithholdPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TAX_TYPE: EnumField<
      WithholdPeriods<DeSerializers>,
      DeSerializersT,
      TaxWithholdTypeIn,
      true,
      true
    >;
    WITHHOLDING_TAXUTHORITY: OrderableEdmTypeField<
      WithholdPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      WithholdPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      WithholdPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      WithholdPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PERIOD_INTERVAL: EnumField<
      WithholdPeriods<DeSerializers>,
      DeSerializersT,
      PeriodUnit,
      true,
      true
    >;
    NUMBER_OF_UNITS: OrderableEdmTypeField<
      WithholdPeriods<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<WithholdPeriods<DeSerializers>>;
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
         * Static representation of the {@link settlementPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SETTLEMENT_PERIOD: fieldBuilder.buildEdmTypeField(
          'SettlementPeriod',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField(
          'TaxType',
          TaxWithholdTypeIn,
          true
        ),
        /**
         * Static representation of the {@link withholdingTaxuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WITHHOLDING_TAXUTHORITY: fieldBuilder.buildEdmTypeField(
          'WithholdingTaxuthority',
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
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link periodInterval} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_INTERVAL: fieldBuilder.buildEnumField(
          'PeriodInterval',
          PeriodUnit,
          true
        ),
        /**
         * Static representation of the {@link numberOfUnits} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_UNITS: fieldBuilder.buildEdmTypeField(
          'NumberOfUnits',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdPeriods)
      };
    }

    return this._schema;
  }
}
