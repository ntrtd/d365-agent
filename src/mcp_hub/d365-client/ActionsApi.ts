/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Actions } from './Actions';
import { ActionsRequestBuilder } from './ActionsRequestBuilder';
import { NoYes } from './NoYes';
import { EmActionType } from './EmActionType';
import { EmCompressionType } from './EmCompressionType';
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
export class ActionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Actions<DeSerializersT>, DeSerializersT>
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
  ): ActionsApi<DeSerializersT> {
    return new ActionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Actions;

  requestBuilder(): ActionsRequestBuilder<DeSerializersT> {
    return new ActionsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Actions<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Actions<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Actions<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Actions, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Actions, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACTION: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SPLIT_ER_OUTPUT_BY_ITEMS: EnumField<
      Actions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    USE_ER_SOURCE: EnumField<
      Actions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ATTACH_TO_SOURCE_DOCUMENT: EnumField<
      Actions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    FILENAME_TO_PROCESS: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    HIDE_ACTION_CLASS_PARAMETERS: EnumField<
      Actions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MESSAGE_ITEM_TYPE: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXECUTABLE_CLASS: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION_TYPE: EnumField<
      Actions<DeSerializers>,
      DeSerializersT,
      EmActionType,
      true,
      true
    >;
    CONFIRMATION_TEXT: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FILENAME: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTION_POPULATE_RECORD: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ITEMS_CONTENT_COMPRESSION_TYPE: EnumField<
      Actions<DeSerializers>,
      DeSerializersT,
      EmCompressionType,
      true,
      true
    >;
    ER_SHOW_DIALOG: EnumField<
      Actions<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    NUMBER_OF_MESSAGE_ITEMS_PER_EXPORT: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ER_FORMAT_MAPPING_GUID: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ER_MODEL_MAPPING_GUID: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    WEB_SERVICE: OrderableEdmTypeField<
      Actions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Actions<DeSerializers>>;
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
         * Static representation of the {@link action} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION: fieldBuilder.buildEdmTypeField('Action', 'Edm.String', false),
        /**
         * Static representation of the {@link splitErOutputByItems} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SPLIT_ER_OUTPUT_BY_ITEMS: fieldBuilder.buildEnumField(
          'SplitEROutputByItems',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link useErSource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_ER_SOURCE: fieldBuilder.buildEnumField('UseERSource', NoYes, true),
        /**
         * Static representation of the {@link attachToSourceDocument} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ATTACH_TO_SOURCE_DOCUMENT: fieldBuilder.buildEnumField(
          'AttachToSourceDocument',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link filenameToProcess} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILENAME_TO_PROCESS: fieldBuilder.buildEdmTypeField(
          'FilenameToProcess',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link hideActionClassParameters} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HIDE_ACTION_CLASS_PARAMETERS: fieldBuilder.buildEnumField(
          'HideActionClassParameters',
          NoYes,
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
         * Static representation of the {@link executableClass} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXECUTABLE_CLASS: fieldBuilder.buildEdmTypeField(
          'ExecutableClass',
          'Edm.String',
          true
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
        /**
         * Static representation of the {@link actionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_TYPE: fieldBuilder.buildEnumField(
          'ActionType',
          EmActionType,
          true
        ),
        /**
         * Static representation of the {@link confirmationText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONFIRMATION_TEXT: fieldBuilder.buildEdmTypeField(
          'ConfirmationText',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link filename} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FILENAME: fieldBuilder.buildEdmTypeField(
          'Filename',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actionPopulateRecord} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTION_POPULATE_RECORD: fieldBuilder.buildEdmTypeField(
          'ActionPopulateRecord',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link itemsContentCompressionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEMS_CONTENT_COMPRESSION_TYPE: fieldBuilder.buildEnumField(
          'ItemsContentCompressionType',
          EmCompressionType,
          true
        ),
        /**
         * Static representation of the {@link erShowDialog} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_SHOW_DIALOG: fieldBuilder.buildEnumField(
          'ERShowDialog',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link numberOfMessageItemsPerExport} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_OF_MESSAGE_ITEMS_PER_EXPORT: fieldBuilder.buildEdmTypeField(
          'NumberOfMessageItemsPerExport',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link erFormatMappingGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_FORMAT_MAPPING_GUID: fieldBuilder.buildEdmTypeField(
          'ERFormatMappingGUID',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link erModelMappingGuid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ER_MODEL_MAPPING_GUID: fieldBuilder.buildEdmTypeField(
          'ERModelMappingGUID',
          'Edm.Guid',
          false
        ),
        /**
         * Static representation of the {@link webService} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WEB_SERVICE: fieldBuilder.buildEdmTypeField(
          'WebService',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Actions)
      };
    }

    return this._schema;
  }
}
