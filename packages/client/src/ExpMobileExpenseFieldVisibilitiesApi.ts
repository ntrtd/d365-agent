/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExpMobileExpenseFieldVisibilities } from './ExpMobileExpenseFieldVisibilities';
import { ExpMobileExpenseFieldVisibilitiesRequestBuilder } from './ExpMobileExpenseFieldVisibilitiesRequestBuilder';
import { ExpenseVisibilityGroup } from './ExpenseVisibilityGroup';
import { ExpenseFieldVisibilityType } from './ExpenseFieldVisibilityType';
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
export class ExpMobileExpenseFieldVisibilitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ExpMobileExpenseFieldVisibilities<DeSerializersT>, DeSerializersT>
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
  ): ExpMobileExpenseFieldVisibilitiesApi<DeSerializersT> {
    return new ExpMobileExpenseFieldVisibilitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ExpMobileExpenseFieldVisibilities;

  requestBuilder(): ExpMobileExpenseFieldVisibilitiesRequestBuilder<DeSerializersT> {
    return new ExpMobileExpenseFieldVisibilitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ExpMobileExpenseFieldVisibilities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ExpMobileExpenseFieldVisibilities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ExpMobileExpenseFieldVisibilities<DeSerializersT>,
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
    typeof ExpMobileExpenseFieldVisibilities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ExpMobileExpenseFieldVisibilities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      ExpMobileExpenseFieldVisibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE_TABLE_ID: OrderableEdmTypeField<
      ExpMobileExpenseFieldVisibilities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    EXPENSE_FIELD_NAME: OrderableEdmTypeField<
      ExpMobileExpenseFieldVisibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AREA: EnumField<
      ExpMobileExpenseFieldVisibilities<DeSerializers>,
      DeSerializersT,
      ExpenseVisibilityGroup,
      true,
      true
    >;
    FIELD_NAME: OrderableEdmTypeField<
      ExpMobileExpenseFieldVisibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VISIBILITY_TYPE: EnumField<
      ExpMobileExpenseFieldVisibilities<DeSerializers>,
      DeSerializersT,
      ExpenseFieldVisibilityType,
      true,
      true
    >;
    LABEL_NAME: OrderableEdmTypeField<
      ExpMobileExpenseFieldVisibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LOCALISED_LABEL_NAME: OrderableEdmTypeField<
      ExpMobileExpenseFieldVisibilities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ExpMobileExpenseFieldVisibilities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link referenceTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'ReferenceTableID',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link expenseFieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPENSE_FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'ExpenseFieldName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link area} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AREA: fieldBuilder.buildEnumField('Area', ExpenseVisibilityGroup, true),
        /**
         * Static representation of the {@link fieldName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FIELD_NAME: fieldBuilder.buildEdmTypeField(
          'FieldName',
          'Edm.String',
          true
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
         * Static representation of the {@link labelName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_NAME: fieldBuilder.buildEdmTypeField(
          'LabelName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link localisedLabelName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCALISED_LABEL_NAME: fieldBuilder.buildEdmTypeField(
          'LocalisedLabelName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ExpMobileExpenseFieldVisibilities)
      };
    }

    return this._schema;
  }
}
