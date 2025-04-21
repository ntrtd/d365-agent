/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BatchGroups } from './BatchGroups';
import { BatchGroupsRequestBuilder } from './BatchGroupsRequestBuilder';
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
export class BatchGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BatchGroups<DeSerializersT>, DeSerializersT>
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
  ): BatchGroupsApi<DeSerializersT> {
    return new BatchGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BatchGroups;

  requestBuilder(): BatchGroupsRequestBuilder<DeSerializersT> {
    return new BatchGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BatchGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<BatchGroups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<BatchGroups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof BatchGroups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(BatchGroups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_ID: OrderableEdmTypeField<
      BatchGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVER_ID: OrderableEdmTypeField<
      BatchGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BatchGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BatchGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_ID: fieldBuilder.buildEdmTypeField(
          'GroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link serverId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVER_ID: fieldBuilder.buildEdmTypeField(
          'ServerId',
          'Edm.String',
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
        ALL_FIELDS: new AllFields('*', BatchGroups)
      };
    }

    return this._schema;
  }
}
