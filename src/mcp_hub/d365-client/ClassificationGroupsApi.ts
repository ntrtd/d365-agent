/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ClassificationGroups } from './ClassificationGroups';
import { ClassificationGroupsRequestBuilder } from './ClassificationGroupsRequestBuilder';
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
export class ClassificationGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ClassificationGroups<DeSerializersT>, DeSerializersT>
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
  ): ClassificationGroupsApi<DeSerializersT> {
    return new ClassificationGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ClassificationGroups;

  requestBuilder(): ClassificationGroupsRequestBuilder<DeSerializersT> {
    return new ClassificationGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ClassificationGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ClassificationGroups<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ClassificationGroups<DeSerializersT>,
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
    typeof ClassificationGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ClassificationGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CLASS_GROUP_CODE: OrderableEdmTypeField<
      ClassificationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ClassificationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLASS_CODE: OrderableEdmTypeField<
      ClassificationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTIPLIER: OrderableEdmTypeField<
      ClassificationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TRANSPORT_CATEGORY_CODE: OrderableEdmTypeField<
      ClassificationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_GROUP_CODE: OrderableEdmTypeField<
      ClassificationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIVISION_CODE: OrderableEdmTypeField<
      ClassificationGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ClassificationGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link classGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'ClassGroupCode',
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
        /**
         * Static representation of the {@link classCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_CODE: fieldBuilder.buildEdmTypeField(
          'ClassCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multiplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIPLIER: fieldBuilder.buildEdmTypeField(
          'Multiplier',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link transportCategoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT_CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'TransportCategoryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packingGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PackingGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link divisionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION_CODE: fieldBuilder.buildEdmTypeField(
          'DivisionCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ClassificationGroups)
      };
    }

    return this._schema;
  }
}
