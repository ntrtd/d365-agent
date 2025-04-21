/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemSettlementRefs } from './ItemSettlementRefs';
import { ItemSettlementRefsRequestBuilder } from './ItemSettlementRefsRequestBuilder';
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
export class ItemSettlementRefsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ItemSettlementRefs<DeSerializersT>, DeSerializersT>
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
  ): ItemSettlementRefsApi<DeSerializersT> {
    return new ItemSettlementRefsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ItemSettlementRefs;

  requestBuilder(): ItemSettlementRefsRequestBuilder<DeSerializersT> {
    return new ItemSettlementRefsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemSettlementRefs<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ItemSettlementRefs<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItemSettlementRefs<DeSerializersT>,
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
    typeof ItemSettlementRefs,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemSettlementRefs,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemSettlementRefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ItemSettlementRefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_TYPE_ID: OrderableEdmTypeField<
      ItemSettlementRefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROCESSING_ID: OrderableEdmTypeField<
      ItemSettlementRefs<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_REGISTERED: OrderableEdmTypeField<
      ItemSettlementRefs<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ItemSettlementRefs<DeSerializers>>;
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
        /**
         * Static representation of the {@link itemTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ItemTypeId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link processingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESSING_ID: fieldBuilder.buildEdmTypeField(
          'ProcessingId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isRegistered} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_REGISTERED: fieldBuilder.buildEdmTypeField(
          'IsRegistered',
          'Edm.Boolean',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemSettlementRefs)
      };
    }

    return this._schema;
  }
}
