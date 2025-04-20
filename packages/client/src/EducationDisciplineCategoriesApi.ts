/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EducationDisciplineCategories } from './EducationDisciplineCategories';
import { EducationDisciplineCategoriesRequestBuilder } from './EducationDisciplineCategoriesRequestBuilder';
import { EducationDisciplineGroupsApi } from './EducationDisciplineGroupsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class EducationDisciplineCategoriesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EducationDisciplineCategories<DeSerializersT>, DeSerializersT>
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
  ): EducationDisciplineCategoriesApi<DeSerializersT> {
    return new EducationDisciplineCategoriesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link educationDisciplineGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE_GROUPS: OneToManyLink<
      EducationDisciplineCategories<DeSerializersT>,
      DeSerializersT,
      EducationDisciplineGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [EducationDisciplineGroupsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      EDUCATION_DISCIPLINE_GROUPS: new OneToManyLink(
        'EducationDisciplineGroups',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = EducationDisciplineCategories;

  requestBuilder(): EducationDisciplineCategoriesRequestBuilder<DeSerializersT> {
    return new EducationDisciplineCategoriesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EducationDisciplineCategories<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EducationDisciplineCategories<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EducationDisciplineCategories<DeSerializersT>,
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
    typeof EducationDisciplineCategories,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EducationDisciplineCategories,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EDUCATION_DISCIPLINE_CATEGORY: OrderableEdmTypeField<
      EducationDisciplineCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      EducationDisciplineCategories<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link educationDisciplineGroups} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE_GROUPS: OneToManyLink<
      EducationDisciplineCategories<DeSerializersT>,
      DeSerializersT,
      EducationDisciplineGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EducationDisciplineCategories<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link educationDisciplineCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION_DISCIPLINE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'EducationDisciplineCategory',
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
        ALL_FIELDS: new AllFields('*', EducationDisciplineCategories)
      };
    }

    return this._schema;
  }
}
