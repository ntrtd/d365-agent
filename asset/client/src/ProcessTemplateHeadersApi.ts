/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProcessTemplateHeaders } from './ProcessTemplateHeaders';
import { ProcessTemplateHeadersRequestBuilder } from './ProcessTemplateHeadersRequestBuilder';
import { BusinessProcessCalendarsApi } from './BusinessProcessCalendarsApi';
import { ProcessTemplateTasksApi } from './ProcessTemplateTasksApi';
import { BusinessProcessType } from './BusinessProcessType';
import { BusinessProcessGenericSubtype } from './BusinessProcessGenericSubtype';
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
  EnumField,
  OrderableEdmTypeField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class ProcessTemplateHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProcessTemplateHeaders<DeSerializersT>, DeSerializersT>
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
  ): ProcessTemplateHeadersApi<DeSerializersT> {
    return new ProcessTemplateHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link businessCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_CALENDAR: OneToOneLink<
      ProcessTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      BusinessProcessCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TASKS: OneToManyLink<
      ProcessTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      ProcessTemplateTasksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      BusinessProcessCalendarsApi<DeSerializersT>,
      ProcessTemplateTasksApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_CALENDAR: new OneToOneLink(
        'BusinessCalendar',
        this,
        linkedApis[0]
      ),
      TASKS: new OneToManyLink('Tasks', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = ProcessTemplateHeaders;

  requestBuilder(): ProcessTemplateHeadersRequestBuilder<DeSerializersT> {
    return new ProcessTemplateHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProcessTemplateHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProcessTemplateHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProcessTemplateHeaders<DeSerializersT>,
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
    typeof ProcessTemplateHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProcessTemplateHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PROCESS_TYPE: EnumField<
      ProcessTemplateHeaders<DeSerializers>,
      DeSerializersT,
      BusinessProcessType,
      true,
      true
    >;
    GENERIC_SUBTYPE: EnumField<
      ProcessTemplateHeaders<DeSerializers>,
      DeSerializersT,
      BusinessProcessGenericSubtype,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      ProcessTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProcessTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_ACTIVE: EnumField<
      ProcessTemplateHeaders<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProcessTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALENDAR_ID: OrderableEdmTypeField<
      ProcessTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link businessCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_CALENDAR: OneToOneLink<
      ProcessTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      BusinessProcessCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link tasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TASKS: OneToManyLink<
      ProcessTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      ProcessTemplateTasksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProcessTemplateHeaders<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link genericSubtype} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENERIC_SUBTYPE: fieldBuilder.buildEnumField(
          'GenericSubtype',
          BusinessProcessGenericSubtype,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isActive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_ACTIVE: fieldBuilder.buildEnumField('IsActive', NoYes, true),
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
         * Static representation of the {@link calendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'CalendarId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProcessTemplateHeaders)
      };
    }

    return this._schema;
  }
}
