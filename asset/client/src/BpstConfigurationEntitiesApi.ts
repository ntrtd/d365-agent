/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BpstConfigurationEntities } from './BpstConfigurationEntities';
import { BpstConfigurationEntitiesRequestBuilder } from './BpstConfigurationEntitiesRequestBuilder';
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
export class BpstConfigurationEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<BpstConfigurationEntities<DeSerializersT>, DeSerializersT>
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
  ): BpstConfigurationEntitiesApi<DeSerializersT> {
    return new BpstConfigurationEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BpstConfigurationEntities;

  requestBuilder(): BpstConfigurationEntitiesRequestBuilder<DeSerializersT> {
    return new BpstConfigurationEntitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BpstConfigurationEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BpstConfigurationEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BpstConfigurationEntities<DeSerializersT>,
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
    typeof BpstConfigurationEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BpstConfigurationEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BpstConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      BpstConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    REPORT_NAME: OrderableEdmTypeField<
      BpstConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MEASUREMENT_NAME: OrderableEdmTypeField<
      BpstConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SQL_CONNECTION_STRING: OrderableEdmTypeField<
      BpstConfigurationEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BpstConfigurationEntities<DeSerializers>>;
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.Guid', false),
        /**
         * Static representation of the {@link reportName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_NAME: fieldBuilder.buildEdmTypeField(
          'ReportName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link measurementName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MEASUREMENT_NAME: fieldBuilder.buildEdmTypeField(
          'MeasurementName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sqlConnectionString} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SQL_CONNECTION_STRING: fieldBuilder.buildEdmTypeField(
          'SqlConnectionString',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BpstConfigurationEntities)
      };
    }

    return this._schema;
  }
}
