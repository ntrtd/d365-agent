/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GroupHeaders } from './GroupHeaders';
import { GroupHeadersRequestBuilder } from './GroupHeadersRequestBuilder';
import { WarrantyGroupStatusType } from './WarrantyGroupStatusType';
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
export class GroupHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GroupHeaders<DeSerializersT>, DeSerializersT>
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
  ): GroupHeadersApi<DeSerializersT> {
    return new GroupHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = GroupHeaders;

  requestBuilder(): GroupHeadersRequestBuilder<DeSerializersT> {
    return new GroupHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GroupHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<GroupHeaders<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<GroupHeaders<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof GroupHeaders, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(GroupHeaders, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_NAME: OrderableEdmTypeField<
      GroupHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      GroupHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    STATUS: EnumField<
      GroupHeaders<DeSerializers>,
      DeSerializersT,
      WarrantyGroupStatusType,
      true,
      true
    >;
    PUBLISHED_DATE_TIME: OrderableEdmTypeField<
      GroupHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      GroupHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<GroupHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          WarrantyGroupStatusType,
          true
        ),
        /**
         * Static representation of the {@link publishedDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PUBLISHED_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'PublishedDateTime',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GroupHeaders)
      };
    }

    return this._schema;
  }
}
