/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RbslFactors } from './RbslFactors';
import { RbslFactorsRequestBuilder } from './RbslFactorsRequestBuilder';
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
export class RbslFactorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RbslFactors<DeSerializersT>, DeSerializersT>
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
  ): RbslFactorsApi<DeSerializersT> {
    return new RbslFactorsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RbslFactors;

  requestBuilder(): RbslFactorsRequestBuilder<DeSerializersT> {
    return new RbslFactorsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RbslFactors<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<RbslFactors<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<RbslFactors<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof RbslFactors, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(RbslFactors, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RbslFactors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_DATE: OrderableEdmTypeField<
      RbslFactors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    YEARS: OrderableEdmTypeField<
      RbslFactors<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    MONTHS: OrderableEdmTypeField<
      RbslFactors<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ASSET_RBSL_FACTOR: OrderableEdmTypeField<
      RbslFactors<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RbslFactors<DeSerializers>>;
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
         * Static representation of the {@link fromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_DATE: fieldBuilder.buildEdmTypeField(
          'FromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link years} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        YEARS: fieldBuilder.buildEdmTypeField('Years', 'Edm.Int32', false),
        /**
         * Static representation of the {@link months} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MONTHS: fieldBuilder.buildEdmTypeField('Months', 'Edm.Int32', false),
        /**
         * Static representation of the {@link assetRbslFactor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSET_RBSL_FACTOR: fieldBuilder.buildEdmTypeField(
          'AssetRBSLFactor',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RbslFactors)
      };
    }

    return this._schema;
  }
}
