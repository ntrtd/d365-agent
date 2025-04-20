/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PeriodCloseTemplateTasks } from './PeriodCloseTemplateTasks';
import { PeriodCloseTemplateTasksRequestBuilder } from './PeriodCloseTemplateTasksRequestBuilder';
import { LedgerPeriodCloseTaskAction } from './LedgerPeriodCloseTaskAction';
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
export class PeriodCloseTemplateTasksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PeriodCloseTemplateTasks<DeSerializersT>, DeSerializersT>
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
  ): PeriodCloseTemplateTasksApi<DeSerializersT> {
    return new PeriodCloseTemplateTasksApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PeriodCloseTemplateTasks;

  requestBuilder(): PeriodCloseTemplateTasksRequestBuilder<DeSerializersT> {
    return new PeriodCloseTemplateTasksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PeriodCloseTemplateTasks<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PeriodCloseTemplateTasks<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PeriodCloseTemplateTasks<DeSerializersT>,
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
    typeof PeriodCloseTemplateTasks,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PeriodCloseTemplateTasks,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    TEMPLATE: OrderableEdmTypeField<
      PeriodCloseTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      PeriodCloseTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TARGET_DAYS_FROM_PROJECT_COMPLETE: OrderableEdmTypeField<
      PeriodCloseTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLOSING_ROLE: OrderableEdmTypeField<
      PeriodCloseTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TASK_LINK_TYPE: EnumField<
      PeriodCloseTemplateTasks<DeSerializers>,
      DeSerializersT,
      LedgerPeriodCloseTaskAction,
      true,
      true
    >;
    TASK_LINK: OrderableEdmTypeField<
      PeriodCloseTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_TIME: OrderableEdmTypeField<
      PeriodCloseTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TASK: OrderableEdmTypeField<
      PeriodCloseTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AREA: OrderableEdmTypeField<
      PeriodCloseTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY_SELECTION: OrderableEdmTypeField<
      PeriodCloseTemplateTasks<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<PeriodCloseTemplateTasks<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link template} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE: fieldBuilder.buildEdmTypeField(
          'Template',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link targetDaysFromProjectComplete} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_DAYS_FROM_PROJECT_COMPLETE: fieldBuilder.buildEdmTypeField(
          'TargetDaysFromProjectComplete',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link closingRole} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSING_ROLE: fieldBuilder.buildEdmTypeField(
          'ClosingRole',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link taskLinkType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_LINK_TYPE: fieldBuilder.buildEnumField(
          'TaskLinkType',
          LedgerPeriodCloseTaskAction,
          true
        ),
        /**
         * Static representation of the {@link taskLink} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_LINK: fieldBuilder.buildEdmTypeField(
          'TaskLink',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dueTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_TIME: fieldBuilder.buildEdmTypeField('DueTime', 'Edm.Int32', false),
        /**
         * Static representation of the {@link task} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK: fieldBuilder.buildEdmTypeField('Task', 'Edm.String', true),
        /**
         * Static representation of the {@link area} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AREA: fieldBuilder.buildEdmTypeField('Area', 'Edm.String', true),
        /**
         * Static representation of the {@link companySelection} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY_SELECTION: fieldBuilder.buildEdmTypeField(
          'CompanySelection',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PeriodCloseTemplateTasks)
      };
    }

    return this._schema;
  }
}
