/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { KittingDynPartGroupItems } from './KittingDynPartGroupItems';
import { KittingDynPartGroupItemsRequestBuilder } from './KittingDynPartGroupItemsRequestBuilder';
import { Kitting_PartGroupsApi } from './Kitting_PartGroupsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class KittingDynPartGroupItemsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<KittingDynPartGroupItems<DeSerializersT>, DeSerializersT>
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
  ): KittingDynPartGroupItemsApi<DeSerializersT> {
    return new KittingDynPartGroupItemsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link groupItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GROUP_ITEMS: OneToOneLink<
      KittingDynPartGroupItems<DeSerializersT>,
      DeSerializersT,
      Kitting_PartGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [Kitting_PartGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      GROUP_ITEMS: new OneToOneLink('GroupItems', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = KittingDynPartGroupItems;

  requestBuilder(): KittingDynPartGroupItemsRequestBuilder<DeSerializersT> {
    return new KittingDynPartGroupItemsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    KittingDynPartGroupItems<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      KittingDynPartGroupItems<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    KittingDynPartGroupItems<DeSerializersT>,
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
    typeof KittingDynPartGroupItems,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        KittingDynPartGroupItems,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      KittingDynPartGroupItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DYNAMIC_PART_GROUP: OrderableEdmTypeField<
      KittingDynPartGroupItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      KittingDynPartGroupItems<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link groupItems} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GROUP_ITEMS: OneToOneLink<
      KittingDynPartGroupItems<DeSerializersT>,
      DeSerializersT,
      Kitting_PartGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<KittingDynPartGroupItems<DeSerializers>>;
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
         * Static representation of the {@link dynamicPartGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DYNAMIC_PART_GROUP: fieldBuilder.buildEdmTypeField(
          'DynamicPartGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', KittingDynPartGroupItems)
      };
    }

    return this._schema;
  }
}
