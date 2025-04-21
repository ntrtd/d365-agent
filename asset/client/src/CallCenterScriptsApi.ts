/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CallCenterScripts } from './CallCenterScripts';
import { CallCenterScriptsRequestBuilder } from './CallCenterScriptsRequestBuilder';
import { McrScriptUse } from './McrScriptUse';
import { McrMessageAssociationTypes } from './McrMessageAssociationTypes';
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
export class CallCenterScriptsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CallCenterScripts<DeSerializersT>, DeSerializersT>
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
  ): CallCenterScriptsApi<DeSerializersT> {
    return new CallCenterScriptsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CallCenterScripts;

  requestBuilder(): CallCenterScriptsRequestBuilder<DeSerializersT> {
    return new CallCenterScriptsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CallCenterScripts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CallCenterScripts<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CallCenterScripts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CallCenterScripts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CallCenterScripts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CallCenterScripts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LANGUAGE_ID: OrderableEdmTypeField<
      CallCenterScripts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCRIPT_TITLE: OrderableEdmTypeField<
      CallCenterScripts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SCRIPT_USE: EnumField<
      CallCenterScripts<DeSerializers>,
      DeSerializersT,
      McrScriptUse,
      true,
      true
    >;
    ASSOCIATION_TYPES: EnumField<
      CallCenterScripts<DeSerializers>,
      DeSerializersT,
      McrMessageAssociationTypes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<CallCenterScripts<DeSerializers>>;
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
         * Static representation of the {@link languageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LANGUAGE_ID: fieldBuilder.buildEdmTypeField(
          'LanguageId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link scriptTitle} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRIPT_TITLE: fieldBuilder.buildEdmTypeField(
          'ScriptTitle',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link scriptUse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCRIPT_USE: fieldBuilder.buildEnumField(
          'ScriptUse',
          McrScriptUse,
          true
        ),
        /**
         * Static representation of the {@link associationTypes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSOCIATION_TYPES: fieldBuilder.buildEnumField(
          'AssociationTypes',
          McrMessageAssociationTypes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CallCenterScripts)
      };
    }

    return this._schema;
  }
}
