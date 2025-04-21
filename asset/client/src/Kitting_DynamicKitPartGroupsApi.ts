/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Kitting_DynamicKitPartGroups } from './Kitting_DynamicKitPartGroups';
import { Kitting_DynamicKitPartGroupsRequestBuilder } from './Kitting_DynamicKitPartGroupsRequestBuilder';
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
export class Kitting_DynamicKitPartGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<Kitting_DynamicKitPartGroups<DeSerializersT>, DeSerializersT>
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
  ): Kitting_DynamicKitPartGroupsApi<DeSerializersT> {
    return new Kitting_DynamicKitPartGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Kitting_DynamicKitPartGroups;

  requestBuilder(): Kitting_DynamicKitPartGroupsRequestBuilder<DeSerializersT> {
    return new Kitting_DynamicKitPartGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Kitting_DynamicKitPartGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      Kitting_DynamicKitPartGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    Kitting_DynamicKitPartGroups<DeSerializersT>,
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
    typeof Kitting_DynamicKitPartGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        Kitting_DynamicKitPartGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Kitting_DynamicKitPartGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DYNAMIC_KIT_ID: OrderableEdmTypeField<
      Kitting_DynamicKitPartGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DYNAMIC_PART_GROUP: OrderableEdmTypeField<
      Kitting_DynamicKitPartGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<Kitting_DynamicKitPartGroups<DeSerializers>>;
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
         * Static representation of the {@link dynamicKitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DYNAMIC_KIT_ID: fieldBuilder.buildEdmTypeField(
          'DynamicKitId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Kitting_DynamicKitPartGroups)
      };
    }

    return this._schema;
  }
}
