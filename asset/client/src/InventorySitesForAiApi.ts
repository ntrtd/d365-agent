/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InventorySitesForAi } from './InventorySitesForAi';
import { InventorySitesForAiRequestBuilder } from './InventorySitesForAiRequestBuilder';
import { InventoryOnHandForAiApi } from './InventoryOnHandForAiApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class InventorySitesForAiApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<InventorySitesForAi<DeSerializersT>, DeSerializersT>
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
  ): InventorySitesForAiApi<DeSerializersT> {
    return new InventorySitesForAiApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link inventoryOnHandAiEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_ON_HAND_AI_ENTITY: OneToManyLink<
      InventorySitesForAi<DeSerializersT>,
      DeSerializersT,
      InventoryOnHandForAiApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [InventoryOnHandForAiApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      INVENTORY_ON_HAND_AI_ENTITY: new OneToManyLink(
        'InventoryOnHandAIEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = InventorySitesForAi;

  requestBuilder(): InventorySitesForAiRequestBuilder<DeSerializersT> {
    return new InventorySitesForAiRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    InventorySitesForAi<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<InventorySitesForAi<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    InventorySitesForAi<DeSerializersT>,
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
    typeof InventorySitesForAi,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        InventorySitesForAi,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      InventorySitesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SITE_ID: OrderableEdmTypeField<
      InventorySitesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      InventorySitesForAi<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link inventoryOnHandAiEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    INVENTORY_ON_HAND_AI_ENTITY: OneToManyLink<
      InventorySitesForAi<DeSerializersT>,
      DeSerializersT,
      InventoryOnHandForAiApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<InventorySitesForAi<DeSerializers>>;
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
         * Static representation of the {@link siteId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SITE_ID: fieldBuilder.buildEdmTypeField('SiteId', 'Edm.String', false),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', InventorySitesForAi)
      };
    }

    return this._schema;
  }
}
