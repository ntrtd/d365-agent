/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardingChecklistTemplateHeaders } from './OnboardingChecklistTemplateHeaders';
import { OnboardingChecklistTemplateHeadersRequestBuilder } from './OnboardingChecklistTemplateHeadersRequestBuilder';
import { WorkersApi } from './WorkersApi';
import { BusinessProcessCalendarsApi } from './BusinessProcessCalendarsApi';
import { OnboardingChecklistTemplateTasksApi } from './OnboardingChecklistTemplateTasksApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class OnboardingChecklistTemplateHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      OnboardingChecklistTemplateHeaders<DeSerializersT>,
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
  ): OnboardingChecklistTemplateHeadersApi<DeSerializersT> {
    return new OnboardingChecklistTemplateHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link checklistTemplateOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TEMPLATE_OWNER: OneToOneLink<
      OnboardingChecklistTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link checklistCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_CALENDAR: OneToOneLink<
      OnboardingChecklistTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      BusinessProcessCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checklistTemplateTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TEMPLATE_TASKS: OneToManyLink<
      OnboardingChecklistTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      OnboardingChecklistTemplateTasksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WorkersApi<DeSerializersT>,
      BusinessProcessCalendarsApi<DeSerializersT>,
      OnboardingChecklistTemplateTasksApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CHECKLIST_TEMPLATE_OWNER: new OneToOneLink(
        'ChecklistTemplateOwner',
        this,
        linkedApis[0]
      ),
      CHECKLIST_CALENDAR: new OneToOneLink(
        'ChecklistCalendar',
        this,
        linkedApis[1]
      ),
      CHECKLIST_TEMPLATE_TASKS: new OneToManyLink(
        'ChecklistTemplateTasks',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = OnboardingChecklistTemplateHeaders;

  requestBuilder(): OnboardingChecklistTemplateHeadersRequestBuilder<DeSerializersT> {
    return new OnboardingChecklistTemplateHeadersRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    OnboardingChecklistTemplateHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OnboardingChecklistTemplateHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OnboardingChecklistTemplateHeaders<DeSerializersT>,
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
    typeof OnboardingChecklistTemplateHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OnboardingChecklistTemplateHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      OnboardingChecklistTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OWNER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      OnboardingChecklistTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      OnboardingChecklistTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CALENDAR_ID: OrderableEdmTypeField<
      OnboardingChecklistTemplateHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link checklistTemplateOwner} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TEMPLATE_OWNER: OneToOneLink<
      OnboardingChecklistTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link checklistCalendar} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_CALENDAR: OneToOneLink<
      OnboardingChecklistTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      BusinessProcessCalendarsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link checklistTemplateTasks} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHECKLIST_TEMPLATE_TASKS: OneToManyLink<
      OnboardingChecklistTemplateHeaders<DeSerializersT>,
      DeSerializersT,
      OnboardingChecklistTemplateTasksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<OnboardingChecklistTemplateHeaders<DeSerializers>>;
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
         * Static representation of the {@link ownerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OWNER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'OwnerPersonnelNumber',
          'Edm.String',
          true
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
        ALL_FIELDS: new AllFields('*', OnboardingChecklistTemplateHeaders)
      };
    }

    return this._schema;
  }
}
