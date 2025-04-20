/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Kitting_PartGroups } from './Kitting_PartGroups';
import { Kitting_PartGroupsRequestBuilder } from './Kitting_PartGroupsRequestBuilder';
import { KittingDynPartGroupItemsApi } from './KittingDynPartGroupItemsApi';
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
export class Kitting_PartGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Kitting_PartGroups<DeSerializersT>, DeSerializersT>
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
  ): Kitting_PartGroupsApi<DeSerializersT> {
    return new Kitting_PartGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link kittingDynPartGroupItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KITTING_DYN_PART_GROUP_ITEM: OneToManyLink<
      Kitting_PartGroups<DeSerializersT>,
      DeSerializersT,
      KittingDynPartGroupItemsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [KittingDynPartGroupItemsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      KITTING_DYN_PART_GROUP_ITEM: new OneToManyLink(
        'KittingDynPartGroupItem',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = Kitting_PartGroups;

  requestBuilder(): Kitting_PartGroupsRequestBuilder<DeSerializersT> {
    return new Kitting_PartGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Kitting_PartGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Kitting_PartGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Kitting_PartGroups<DeSerializersT>,
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
    typeof Kitting_PartGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Kitting_PartGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Kitting_PartGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DYNAMIC_PART_GROUP: OrderableEdmTypeField<
      Kitting_PartGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Kitting_PartGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link kittingDynPartGroupItem} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KITTING_DYN_PART_GROUP_ITEM: OneToManyLink<
      Kitting_PartGroups<DeSerializersT>,
      DeSerializersT,
      KittingDynPartGroupItemsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Kitting_PartGroups<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Kitting_PartGroups)
      };
    }

    return this._schema;
  }
}
