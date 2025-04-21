/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValidationTaskAreas } from './ValidationTaskAreas';
import { ValidationTaskAreasRequestBuilder } from './ValidationTaskAreasRequestBuilder';
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
export class ValidationTaskAreasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ValidationTaskAreas<DeSerializersT>, DeSerializersT>
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
  ): ValidationTaskAreasApi<DeSerializersT> {
    return new ValidationTaskAreasApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link validationProjectTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALIDATION_PROJECT_TASK: OneToManyLink<
      ValidationTaskAreas<DeSerializersT>,
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

  entityConstructor = ValidationTaskAreas;

  requestBuilder(): ValidationTaskAreasRequestBuilder<DeSerializersT> {
    return new ValidationTaskAreasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ValidationTaskAreas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ValidationTaskAreas<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ValidationTaskAreas<DeSerializersT>,
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
    typeof ValidationTaskAreas,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ValidationTaskAreas,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      ValidationTaskAreas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      ValidationTaskAreas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ValidationTaskAreas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link validationProjectTask} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VALIDATION_PROJECT_TASK: OneToManyLink<
      ValidationTaskAreas<DeSerializersT>,
      DeSerializersT,
      ValidationProjectTasksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ValidationTaskAreas<DeSerializers>>;
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
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Decimal',
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
        ALL_FIELDS: new AllFields('*', ValidationTaskAreas)
      };
    }

    return this._schema;
  }
}
