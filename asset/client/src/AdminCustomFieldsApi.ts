/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AdminCustomFields } from './AdminCustomFields';
import { AdminCustomFieldsRequestBuilder } from './AdminCustomFieldsRequestBuilder';
import { TrvFieldVisibility } from './TrvFieldVisibility';
import { NoYes } from './NoYes';
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
export class AdminCustomFieldsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AdminCustomFields<DeSerializersT>, DeSerializersT>
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
  ): AdminCustomFieldsApi<DeSerializersT> {
    return new AdminCustomFieldsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AdminCustomFields;

  requestBuilder(): AdminCustomFieldsRequestBuilder<DeSerializersT> {
    return new AdminCustomFieldsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AdminCustomFields<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AdminCustomFields<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<AdminCustomFields<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof AdminCustomFields,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AdminCustomFields,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AdminCustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      AdminCustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REF_TABLE_ID: OrderableEdmTypeField<
      AdminCustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REF_FIELD_ID: OrderableEdmTypeField<
      AdminCustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    METHOD_NAME: OrderableEdmTypeField<
      AdminCustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VISIBILITY: EnumField<
      AdminCustomFields<DeSerializers>,
      DeSerializersT,
      TrvFieldVisibility,
      true,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      AdminCustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHOW_IN_FORM: EnumField<
      AdminCustomFields<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LOCALISED_LABEL_NAME: OrderableEdmTypeField<
      AdminCustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_NAME: OrderableEdmTypeField<
      AdminCustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FIELD_NAME: OrderableEdmTypeField<
      AdminCustomFields<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<AdminCustomFields<DeSerializers>>;
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
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link refTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'RefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link refFieldId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_FIELD_ID: fieldBuilder.buildEdmTypeField(
          'RefFieldId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link methodName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        METHOD_NAME: fieldBuilder.buildEdmTypeField(
          'MethodName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link visibility} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VISIBILITY: fieldBuilder.buildEnumField(
          'Visibility',
          TrvFieldVisibility,
          true
        ),
        /**
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link showInForm} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHOW_IN_FORM: fieldBuilder.buildEnumField('ShowInForm', NoYes, true),
        /**
         * Static representation of the {@link localisedLabelName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCALISED_LABEL_NAME: fieldBuilder.buildEdmTypeField(
          'LocalisedLabelName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_NAME: fieldBuilder.buildEdmTypeField(
          'LabelName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link fieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'FieldName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AdminCustomFields)
      };
    }

    return this._schema;
  }
}
