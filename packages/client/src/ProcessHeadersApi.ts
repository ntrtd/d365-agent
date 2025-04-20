/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessHeaders } from './ProcessHeaders';
import { ProcessHeadersRequestBuilder } from './ProcessHeadersRequestBuilder';
import { OnboardProcessHeadersDualWriteApi } from './OnboardProcessHeadersDualWriteApi';
import { ProcessTasksApi } from './ProcessTasksApi';
import { BusinessProcessType } from './BusinessProcessType';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';
import { BusinessProcessHeaderStatus } from './BusinessProcessHeaderStatus';
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
  EnumField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProcessHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProcessHeaders<DeSerializersT>, DeSerializersT>
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
  ): ProcessHeadersApi<DeSerializersT> {
    return new ProcessHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link processes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESSES: OneToOneLink<
      ProcessHeaders<DeSerializersT>,
      DeSerializersT,
      OnboardProcessHeadersDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TASKS: OneToManyLink<
      ProcessHeaders<DeSerializersT>,
      DeSerializersT,
      ProcessTasksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OnboardProcessHeadersDualWriteApi<DeSerializersT>,
      ProcessTasksApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PROCESSES: new OneToOneLink('Processes', this, linkedApis[0]),
      TASKS: new OneToManyLink('Tasks', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProcessHeaders;

  requestBuilder(): ProcessHeadersRequestBuilder<DeSerializersT> {
    return new ProcessHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProcessHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProcessHeaders<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProcessHeaders<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProcessHeaders, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProcessHeaders, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROCESS_ID: OrderableEdmTypeField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RESOLVED_BY_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TEMPLATE_PROCESS_TYPE: EnumField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      BusinessProcessType,
      true,
      true
    >;
    START_DATE_TIME: OrderableEdmTypeField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCESS_TYPE: EnumField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      BusinessProcessType,
      true,
      true
    >;
    END_DATE_TIME: OrderableEdmTypeField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROCESS_OWNER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TARGET_DATE: OrderableEdmTypeField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SOURCE_TEMPLATE_NAME: OrderableEdmTypeField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SOURCE_TEMPLATE_GENERIC_SUBTYPE: EnumField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      BusinessProcessGenericSubtype,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STATUS: EnumField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      BusinessProcessHeaderStatus,
      true,
      true
    >;
    GENERIC_SUBTYPE: EnumField<
      ProcessHeaders<DeSerializers>,
      DeSerializersT,
      BusinessProcessGenericSubtype,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link processes} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROCESSES: OneToOneLink<
      ProcessHeaders<DeSerializersT>,
      DeSerializersT,
      OnboardProcessHeadersDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TASKS: OneToManyLink<
      ProcessHeaders<DeSerializersT>,
      DeSerializersT,
      ProcessTasksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProcessHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link processId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_ID: fieldBuilder.buildEdmTypeField(
          'ProcessId',
          'Edm.Guid',
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
         * Static representation of the {@link resolvedByPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOLVED_BY_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ResolvedByPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceTemplateProcessType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TEMPLATE_PROCESS_TYPE: fieldBuilder.buildEnumField(
          'SourceTemplateProcessType',
          BusinessProcessType,
          true
        ),
        /**
         * Static representation of the {@link startDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'StartDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link processType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_TYPE: fieldBuilder.buildEnumField(
          'ProcessType',
          BusinessProcessType,
          true
        ),
        /**
         * Static representation of the {@link endDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'EndDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link processOwnerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROCESS_OWNER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProcessOwnerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link targetDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TARGET_DATE: fieldBuilder.buildEdmTypeField(
          'TargetDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link sourceTemplateName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TEMPLATE_NAME: fieldBuilder.buildEdmTypeField(
          'SourceTemplateName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link sourceTemplateGenericSubtype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_TEMPLATE_GENERIC_SUBTYPE: fieldBuilder.buildEnumField(
          'SourceTemplateGenericSubtype',
          BusinessProcessGenericSubtype,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          BusinessProcessHeaderStatus,
          true
        ),
        /**
         * Static representation of the {@link genericSubtype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERIC_SUBTYPE: fieldBuilder.buildEnumField(
          'GenericSubtype',
          BusinessProcessGenericSubtype,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcessHeaders)
      };
    }

    return this._schema;
  }
}
