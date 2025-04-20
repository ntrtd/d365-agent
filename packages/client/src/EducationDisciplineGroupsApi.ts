/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EducationDisciplineGroups } from './EducationDisciplineGroups';
import { EducationDisciplineGroupsRequestBuilder } from './EducationDisciplineGroupsRequestBuilder';
import { EducationDisciplinesApi } from './EducationDisciplinesApi';
import { EducationDisciplineCategoriesApi } from './EducationDisciplineCategoriesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EducationDisciplineGroupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EducationDisciplineGroups<DeSerializersT>, DeSerializersT>
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
  ): EducationDisciplineGroupsApi<DeSerializersT> {
    return new EducationDisciplineGroupsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link educationDiscipline} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE: OneToOneLink<
      EducationDisciplineGroups<DeSerializersT>,
      DeSerializersT,
      EducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link educationDisciplineCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE_CATEGORY: OneToOneLink<
      EducationDisciplineGroups<DeSerializersT>,
      DeSerializersT,
      EducationDisciplineCategoriesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EducationDisciplinesApi<DeSerializersT>,
      EducationDisciplineCategoriesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      EDUCATION_DISCIPLINE: new OneToOneLink(
        'EducationDiscipline',
        this,
        linkedApis[0]
      ),
      EDUCATION_DISCIPLINE_CATEGORY: new OneToOneLink(
        'EducationDisciplineCategory',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = EducationDisciplineGroups;

  requestBuilder(): EducationDisciplineGroupsRequestBuilder<DeSerializersT> {
    return new EducationDisciplineGroupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EducationDisciplineGroups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EducationDisciplineGroups<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EducationDisciplineGroups<DeSerializersT>,
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
    typeof EducationDisciplineGroups,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EducationDisciplineGroups,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    EDUCATION_ID: OrderableEdmTypeField<
      EducationDisciplineGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EDUCATION_DISCIPLINE_CATEGORY_ID: OrderableEdmTypeField<
      EducationDisciplineGroups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link educationDiscipline} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE: OneToOneLink<
      EducationDisciplineGroups<DeSerializersT>,
      DeSerializersT,
      EducationDisciplinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link educationDisciplineCategory} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EDUCATION_DISCIPLINE_CATEGORY: OneToOneLink<
      EducationDisciplineGroups<DeSerializersT>,
      DeSerializersT,
      EducationDisciplineCategoriesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EducationDisciplineGroups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link educationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION_ID: fieldBuilder.buildEdmTypeField(
          'EducationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link educationDisciplineCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EDUCATION_DISCIPLINE_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'EducationDisciplineCategoryId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EducationDisciplineGroups)
      };
    }

    return this._schema;
  }
}
