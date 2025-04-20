/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActionPopulateRecordTasks } from './ActionPopulateRecordTasks';
import { ActionPopulateRecordTasksRequestBuilder } from './ActionPopulateRecordTasksRequestBuilder';
import { EmAccountType } from './EmAccountType';
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
  EdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class ActionPopulateRecordTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ActionPopulateRecordTasks<DeSerializersT>, DeSerializersT>
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
  ): ActionPopulateRecordTasksApi<DeSerializersT> {
    return new ActionPopulateRecordTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ActionPopulateRecordTasks;

  requestBuilder(): ActionPopulateRecordTasksRequestBuilder<DeSerializersT> {
    return new ActionPopulateRecordTasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ActionPopulateRecordTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ActionPopulateRecordTasks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ActionPopulateRecordTasks<DeSerializersT>,
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
    typeof ActionPopulateRecordTasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ActionPopulateRecordTasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ActionPopulateRecordTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTION_NAME: OrderableEdmTypeField<
      ActionPopulateRecordTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ActionPopulateRecordTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUERY_DATA_AREA_ID: OrderableEdmTypeField<
      ActionPopulateRecordTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_QUERY: OrderableEdmTypeField<
      ActionPopulateRecordTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MESSAGE_ITEM_TYPE: OrderableEdmTypeField<
      ActionPopulateRecordTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_DATE_FIELD_NAME: OrderableEdmTypeField<
      ActionPopulateRecordTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MASTER_TABLE_NAME: OrderableEdmTypeField<
      ActionPopulateRecordTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEM_NUMBER_FIELD_NAME: OrderableEdmTypeField<
      ActionPopulateRecordTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKED_QUERY: EdmTypeField<
      ActionPopulateRecordTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      ActionPopulateRecordTasks<DeSerializers>,
      DeSerializersT,
      EmAccountType,
      true,
      true
    >;
    ITEM_ACCOUNT_FIELD_NAME: OrderableEdmTypeField<
      ActionPopulateRecordTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ActionPopulateRecordTasks<DeSerializers>>;
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
         * Static representation of the {@link actionName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_NAME: fieldBuilder.buildEdmTypeField(
          'ActionName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link queryDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUERY_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'QueryDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packQuery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_QUERY: fieldBuilder.buildEdmTypeField(
          'PackQuery',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link messageItemType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MESSAGE_ITEM_TYPE: fieldBuilder.buildEdmTypeField(
          'MessageItemType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemDateFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_DATE_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'ItemDateFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link masterTableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASTER_TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'MasterTableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemNumberFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'ItemNumberFieldName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packedQuery} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKED_QUERY: fieldBuilder.buildEdmTypeField(
          'PackedQuery',
          'Edm.Binary',
          true
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          EmAccountType,
          true
        ),
        /**
         * Static representation of the {@link itemAccountFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ACCOUNT_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'ItemAccountFieldName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ActionPopulateRecordTasks)
      };
    }

    return this._schema;
  }
}
