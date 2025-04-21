/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpenseFieldsVisibilities } from './ExpenseFieldsVisibilities';
import { ExpenseFieldsVisibilitiesRequestBuilder } from './ExpenseFieldsVisibilitiesRequestBuilder';
import { ExpenseFieldVisibilityType } from './ExpenseFieldVisibilityType';
import { ExpenseVisibilityGroup } from './ExpenseVisibilityGroup';
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
export class ExpenseFieldsVisibilitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ExpenseFieldsVisibilities<DeSerializersT>, DeSerializersT>
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
  ): ExpenseFieldsVisibilitiesApi<DeSerializersT> {
    return new ExpenseFieldsVisibilitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpenseFieldsVisibilities;

  requestBuilder(): ExpenseFieldsVisibilitiesRequestBuilder<DeSerializersT> {
    return new ExpenseFieldsVisibilitiesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ExpenseFieldsVisibilities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExpenseFieldsVisibilities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpenseFieldsVisibilities<DeSerializersT>,
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
    typeof ExpenseFieldsVisibilities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpenseFieldsVisibilities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ExpenseFieldsVisibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ExpenseFieldsVisibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TABLE_NAME: OrderableEdmTypeField<
      ExpenseFieldsVisibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FIELD_NAME: OrderableEdmTypeField<
      ExpenseFieldsVisibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VISIBILITY_TYPE: EnumField<
      ExpenseFieldsVisibilities<DeSerializers>,
      DeSerializersT,
      ExpenseFieldVisibilityType,
      true,
      true
    >;
    AREA: EnumField<
      ExpenseFieldsVisibilities<DeSerializers>,
      DeSerializersT,
      ExpenseVisibilityGroup,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpenseFieldsVisibilities<DeSerializers>>;
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
         * Static representation of the {@link tableName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TABLE_NAME: fieldBuilder.buildEdmTypeField(
          'TableName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'FieldName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link visibilityType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VISIBILITY_TYPE: fieldBuilder.buildEnumField(
          'VisibilityType',
          ExpenseFieldVisibilityType,
          true
        ),
        /**
         * Static representation of the {@link area} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AREA: fieldBuilder.buildEnumField('Area', ExpenseVisibilityGroup, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpenseFieldsVisibilities)
      };
    }

    return this._schema;
  }
}
