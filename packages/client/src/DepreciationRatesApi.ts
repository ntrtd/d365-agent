/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DepreciationRates } from './DepreciationRates';
import { DepreciationRatesRequestBuilder } from './DepreciationRatesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class DepreciationRatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DepreciationRates<DeSerializersT>, DeSerializersT>
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
  ): DepreciationRatesApi<DeSerializersT> {
    return new DepreciationRatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DepreciationRates;

  requestBuilder(): DepreciationRatesRequestBuilder<DeSerializersT> {
    return new DepreciationRatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DepreciationRates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<DepreciationRates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<DepreciationRates<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof DepreciationRates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DepreciationRates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    USEFUL_LIFE: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OSL_DEP_RATE: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NDB_250_GUARANTEED_DEP_RATE: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NDB_200_DEP_RATE: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NDB_250_DEP_RATE: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NDB_200_REVISED_DEP_RATE: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ELECTRONIC_DEP_RATE: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ODB_DEP_RATE: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NDB_250_REVISED_DEP_RATE: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NSL_DEP_RATE: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    NDB_200_GUARANTEED_DEP_RATE: OrderableEdmTypeField<
      DepreciationRates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<DepreciationRates<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link usefulLife} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USEFUL_LIFE: fieldBuilder.buildEdmTypeField(
          'UsefulLife',
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
         * Static representation of the {@link oslDepRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OSL_DEP_RATE: fieldBuilder.buildEdmTypeField(
          'OSLDepRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ndb250GuaranteedDepRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NDB_250_GUARANTEED_DEP_RATE: fieldBuilder.buildEdmTypeField(
          'NDB250GuaranteedDepRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ndb200DepRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NDB_200_DEP_RATE: fieldBuilder.buildEdmTypeField(
          'NDB200DepRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ndb250DepRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NDB_250_DEP_RATE: fieldBuilder.buildEdmTypeField(
          'NDB250DepRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ndb200RevisedDepRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NDB_200_REVISED_DEP_RATE: fieldBuilder.buildEdmTypeField(
          'NDB200RevisedDepRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link electronicDepRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ELECTRONIC_DEP_RATE: fieldBuilder.buildEdmTypeField(
          'ElectronicDepRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link odbDepRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ODB_DEP_RATE: fieldBuilder.buildEdmTypeField(
          'ODBDepRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ndb250RevisedDepRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NDB_250_REVISED_DEP_RATE: fieldBuilder.buildEdmTypeField(
          'NDB250RevisedDepRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link nslDepRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NSL_DEP_RATE: fieldBuilder.buildEdmTypeField(
          'NSLDepRate',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link ndb200GuaranteedDepRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NDB_200_GUARANTEED_DEP_RATE: fieldBuilder.buildEdmTypeField(
          'NDB200GuaranteedDepRate',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DepreciationRates)
      };
    }

    return this._schema;
  }
}
