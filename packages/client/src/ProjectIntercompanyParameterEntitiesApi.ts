/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjectIntercompanyParameterEntities } from './ProjectIntercompanyParameterEntities';
import { ProjectIntercompanyParameterEntitiesRequestBuilder } from './ProjectIntercompanyParameterEntitiesRequestBuilder';
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
export class ProjectIntercompanyParameterEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ProjectIntercompanyParameterEntities<DeSerializersT>,
      DeSerializersT
    >
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
  ): ProjectIntercompanyParameterEntitiesApi<DeSerializersT> {
    return new ProjectIntercompanyParameterEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjectIntercompanyParameterEntities;

  requestBuilder(): ProjectIntercompanyParameterEntitiesRequestBuilder<DeSerializersT> {
    return new ProjectIntercompanyParameterEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ProjectIntercompanyParameterEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjectIntercompanyParameterEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjectIntercompanyParameterEntities<DeSerializersT>,
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
    typeof ProjectIntercompanyParameterEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjectIntercompanyParameterEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjectIntercompanyParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BORROWING_LEGAL_ENTITY: OrderableEdmTypeField<
      ProjectIntercompanyParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEFAULT_TIMESHEET_CATEGORY: OrderableEdmTypeField<
      ProjectIntercompanyParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_EXPENSE_CATEGORY: OrderableEdmTypeField<
      ProjectIntercompanyParameterEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCRUE_REVENUE: EnumField<
      ProjectIntercompanyParameterEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjectIntercompanyParameterEntities<DeSerializers>>;
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
         * Static representation of the {@link borrowingLegalEntity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BORROWING_LEGAL_ENTITY: fieldBuilder.buildEdmTypeField(
          'BorrowingLegalEntity',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link defaultTimesheetCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TIMESHEET_CATEGORY: fieldBuilder.buildEdmTypeField(
          'DefaultTimesheetCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultExpenseCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_EXPENSE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'DefaultExpenseCategory',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accrueRevenue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCRUE_REVENUE: fieldBuilder.buildEnumField(
          'AccrueRevenue',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjectIntercompanyParameterEntities)
      };
    }

    return this._schema;
  }
}
