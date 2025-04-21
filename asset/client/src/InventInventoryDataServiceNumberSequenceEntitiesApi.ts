/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventInventoryDataServiceNumberSequenceEntities } from './InventInventoryDataServiceNumberSequenceEntities';
import { InventInventoryDataServiceNumberSequenceEntitiesRequestBuilder } from './InventInventoryDataServiceNumberSequenceEntitiesRequestBuilder';
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
export class InventInventoryDataServiceNumberSequenceEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      InventInventoryDataServiceNumberSequenceEntities<DeSerializersT>,
      DeSerializersT
    >
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
  ): InventInventoryDataServiceNumberSequenceEntitiesApi<DeSerializersT> {
    return new InventInventoryDataServiceNumberSequenceEntitiesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = InventInventoryDataServiceNumberSequenceEntities;

  requestBuilder(): InventInventoryDataServiceNumberSequenceEntitiesRequestBuilder<DeSerializersT> {
    return new InventInventoryDataServiceNumberSequenceEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    InventInventoryDataServiceNumberSequenceEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      InventInventoryDataServiceNumberSequenceEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventInventoryDataServiceNumberSequenceEntities<DeSerializersT>,
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
    typeof InventInventoryDataServiceNumberSequenceEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventInventoryDataServiceNumberSequenceEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventInventoryDataServiceNumberSequenceEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IV_DATA_AREA_ID: OrderableEdmTypeField<
      InventInventoryDataServiceNumberSequenceEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUMBER_SEQUENCE: OrderableEdmTypeField<
      InventInventoryDataServiceNumberSequenceEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      InventInventoryDataServiceNumberSequenceEntities<DeSerializers>
    >;
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
         * Static representation of the {@link ivDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IV_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'IVDataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link numberSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'NumberSequence',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          InventInventoryDataServiceNumberSequenceEntities
        )
      };
    }

    return this._schema;
  }
}
