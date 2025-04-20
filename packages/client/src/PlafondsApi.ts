/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Plafonds } from './Plafonds';
import { PlafondsRequestBuilder } from './PlafondsRequestBuilder';
import { PlafondTypeIt } from './PlafondTypeIt';
import { NoYes } from './NoYes';
import { PlafondStatusIt } from './PlafondStatusIt';
import { PlafondLimitTypeIt } from './PlafondLimitTypeIt';
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
export class PlafondsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Plafonds<DeSerializersT>, DeSerializersT>
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
  ): PlafondsApi<DeSerializersT> {
    return new PlafondsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Plafonds;

  requestBuilder(): PlafondsRequestBuilder<DeSerializersT> {
    return new PlafondsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Plafonds<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Plafonds<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Plafonds<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Plafonds, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Plafonds, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAFOND_ID: OrderableEdmTypeField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PLAFOND_TYPE: EnumField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      PlafondTypeIt,
      true,
      true
    >;
    NO_LIMIT_CHECK: EnumField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STATUS: EnumField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      PlafondStatusIt,
      true,
      true
    >;
    EXPORTATION: EnumField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TO_DATE: OrderableEdmTypeField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLOSED_DATE: OrderableEdmTypeField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    INITIAL_AMOUNT: OrderableEdmTypeField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSIMILATED_OPERATIONS: EnumField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIMIT_PERCENT: OrderableEdmTypeField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LIMIT_TYPE: EnumField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      PlafondLimitTypeIt,
      true,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SAN_MARINO_SALES: EnumField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CURRENT_AMOUNT: OrderableEdmTypeField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    EU_SALES: EnumField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VAT_DECLARATION_PRESENTED: EnumField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_PERIOD: OrderableEdmTypeField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIMIT_AMOUNT: OrderableEdmTypeField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SPECIAL_OPERATIONS: EnumField<
      Plafonds<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<Plafonds<DeSerializers>>;
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
         * Static representation of the {@link plafondId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAFOND_ID: fieldBuilder.buildEdmTypeField(
          'PlafondId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link plafondType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLAFOND_TYPE: fieldBuilder.buildEnumField(
          'PlafondType',
          PlafondTypeIt,
          true
        ),
        /**
         * Static representation of the {@link noLimitCheck} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NO_LIMIT_CHECK: fieldBuilder.buildEnumField(
          'NoLimitCheck',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField('Status', PlafondStatusIt, true),
        /**
         * Static representation of the {@link exportation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPORTATION: fieldBuilder.buildEnumField('Exportation', NoYes, true),
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
         * Static representation of the {@link closedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED_DATE: fieldBuilder.buildEdmTypeField(
          'ClosedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link initialAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INITIAL_AMOUNT: fieldBuilder.buildEdmTypeField(
          'InitialAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link assimilatedOperations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSIMILATED_OPERATIONS: fieldBuilder.buildEnumField(
          'AssimilatedOperations',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link limitPercent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_PERCENT: fieldBuilder.buildEdmTypeField(
          'LimitPercent',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link limitType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_TYPE: fieldBuilder.buildEnumField(
          'LimitType',
          PlafondLimitTypeIt,
          true
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
         * Static representation of the {@link sanMarinoSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SAN_MARINO_SALES: fieldBuilder.buildEnumField(
          'SanMarinoSales',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link currentAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CurrentAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link euSales} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EU_SALES: fieldBuilder.buildEnumField('EUSales', NoYes, true),
        /**
         * Static representation of the {@link vatDeclarationPresented} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VAT_DECLARATION_PRESENTED: fieldBuilder.buildEnumField(
          'VATDeclarationPresented',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link taxPeriod} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_PERIOD: fieldBuilder.buildEdmTypeField(
          'TaxPeriod',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link limitAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMIT_AMOUNT: fieldBuilder.buildEdmTypeField(
          'LimitAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link specialOperations} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPECIAL_OPERATIONS: fieldBuilder.buildEnumField(
          'SpecialOperations',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Plafonds)
      };
    }

    return this._schema;
  }
}
