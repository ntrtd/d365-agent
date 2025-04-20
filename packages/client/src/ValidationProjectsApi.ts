/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValidationProjects } from './ValidationProjects';
import { ValidationProjectsRequestBuilder } from './ValidationProjectsRequestBuilder';
import { ValidationProjectTasksApi } from './ValidationProjectTasksApi';
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
export class ValidationProjectsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ValidationProjects<DeSerializersT>, DeSerializersT>
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
  ): ValidationProjectsApi<DeSerializersT> {
    return new ValidationProjectsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link validationProjectTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALIDATION_PROJECT_TASK: OneToManyLink<
      ValidationProjects<DeSerializersT>,
      DeSerializersT,
      ValidationProjectTasksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ValidationProjectTasksApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      VALIDATION_PROJECT_TASK: new OneToManyLink(
        'ValidationProjectTask',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ValidationProjects;

  requestBuilder(): ValidationProjectsRequestBuilder<DeSerializersT> {
    return new ValidationProjectsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ValidationProjects<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ValidationProjects<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ValidationProjects<DeSerializersT>,
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
    typeof ValidationProjects,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ValidationProjects,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      ValidationProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY: OrderableEdmTypeField<
      ValidationProjects<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link validationProjectTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALIDATION_PROJECT_TASK: OneToManyLink<
      ValidationProjects<DeSerializersT>,
      DeSerializersT,
      ValidationProjectTasksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ValidationProjects<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link legalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'LegalEntity',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ValidationProjects)
      };
    }

    return this._schema;
  }
}
