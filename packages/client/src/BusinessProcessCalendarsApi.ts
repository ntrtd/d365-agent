/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BusinessProcessCalendars } from './BusinessProcessCalendars';
import { BusinessProcessCalendarsRequestBuilder } from './BusinessProcessCalendarsRequestBuilder';
import { ProcessTemplateHeadersApi } from './ProcessTemplateHeadersApi';
import { OnboardingChecklistTemplateHeadersApi } from './OnboardingChecklistTemplateHeadersApi';
import { BusinessProcessCalendarDaysApi } from './BusinessProcessCalendarDaysApi';
import { BusinessProcessCalendarDayStatus } from './BusinessProcessCalendarDayStatus';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BusinessProcessCalendarsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<BusinessProcessCalendars<DeSerializersT>, DeSerializersT>
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
  ): BusinessProcessCalendarsApi<DeSerializersT> {
    return new BusinessProcessCalendarsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link businessProcessTemplates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PROCESS_TEMPLATES: OneToManyLink<
      BusinessProcessCalendars<DeSerializersT>,
      DeSerializersT,
      ProcessTemplateHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onboardingChecklistTemplates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONBOARDING_CHECKLIST_TEMPLATES: OneToManyLink<
      BusinessProcessCalendars<DeSerializersT>,
      DeSerializersT,
      OnboardingChecklistTemplateHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link calendarDays} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CALENDAR_DAYS: OneToManyLink<
      BusinessProcessCalendars<DeSerializersT>,
      DeSerializersT,
      BusinessProcessCalendarDaysApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProcessTemplateHeadersApi<DeSerializersT>,
      OnboardingChecklistTemplateHeadersApi<DeSerializersT>,
      BusinessProcessCalendarDaysApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      BUSINESS_PROCESS_TEMPLATES: new OneToManyLink(
        'BusinessProcessTemplates',
        this,
        linkedApis[0]
      ),
      ONBOARDING_CHECKLIST_TEMPLATES: new OneToManyLink(
        'OnboardingChecklistTemplates',
        this,
        linkedApis[1]
      ),
      CALENDAR_DAYS: new OneToManyLink('CalendarDays', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = BusinessProcessCalendars;

  requestBuilder(): BusinessProcessCalendarsRequestBuilder<DeSerializersT> {
    return new BusinessProcessCalendarsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    BusinessProcessCalendars<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BusinessProcessCalendars<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BusinessProcessCalendars<DeSerializersT>,
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
    typeof BusinessProcessCalendars,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BusinessProcessCalendars,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CALENDAR_ID: OrderableEdmTypeField<
      BusinessProcessCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    IS_OPEN_SATURDAY: EnumField<
      BusinessProcessCalendars<DeSerializers>,
      DeSerializersT,
      BusinessProcessCalendarDayStatus,
      true,
      true
    >;
    IS_OPEN_FRIDAY: EnumField<
      BusinessProcessCalendars<DeSerializers>,
      DeSerializersT,
      BusinessProcessCalendarDayStatus,
      true,
      true
    >;
    IS_OPEN_WEDNESDAY: EnumField<
      BusinessProcessCalendars<DeSerializers>,
      DeSerializersT,
      BusinessProcessCalendarDayStatus,
      true,
      true
    >;
    IS_OPEN_THURSDAY: EnumField<
      BusinessProcessCalendars<DeSerializers>,
      DeSerializersT,
      BusinessProcessCalendarDayStatus,
      true,
      true
    >;
    IS_OPEN_TUESDAY: EnumField<
      BusinessProcessCalendars<DeSerializers>,
      DeSerializersT,
      BusinessProcessCalendarDayStatus,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      BusinessProcessCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_OPEN_SUNDAY: EnumField<
      BusinessProcessCalendars<DeSerializers>,
      DeSerializersT,
      BusinessProcessCalendarDayStatus,
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      BusinessProcessCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_OPEN_MONDAY: EnumField<
      BusinessProcessCalendars<DeSerializers>,
      DeSerializersT,
      BusinessProcessCalendarDayStatus,
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      BusinessProcessCalendars<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link businessProcessTemplates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BUSINESS_PROCESS_TEMPLATES: OneToManyLink<
      BusinessProcessCalendars<DeSerializersT>,
      DeSerializersT,
      ProcessTemplateHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link onboardingChecklistTemplates} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ONBOARDING_CHECKLIST_TEMPLATES: OneToManyLink<
      BusinessProcessCalendars<DeSerializersT>,
      DeSerializersT,
      OnboardingChecklistTemplateHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link calendarDays} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CALENDAR_DAYS: OneToManyLink<
      BusinessProcessCalendars<DeSerializersT>,
      DeSerializersT,
      BusinessProcessCalendarDaysApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<BusinessProcessCalendars<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link calendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'CalendarId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link isOpenSaturday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPEN_SATURDAY: fieldBuilder.buildEnumField(
          'IsOpenSaturday',
          BusinessProcessCalendarDayStatus,
          true
        ),
        /**
         * Static representation of the {@link isOpenFriday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPEN_FRIDAY: fieldBuilder.buildEnumField(
          'IsOpenFriday',
          BusinessProcessCalendarDayStatus,
          true
        ),
        /**
         * Static representation of the {@link isOpenWednesday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPEN_WEDNESDAY: fieldBuilder.buildEnumField(
          'IsOpenWednesday',
          BusinessProcessCalendarDayStatus,
          true
        ),
        /**
         * Static representation of the {@link isOpenThursday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPEN_THURSDAY: fieldBuilder.buildEnumField(
          'IsOpenThursday',
          BusinessProcessCalendarDayStatus,
          true
        ),
        /**
         * Static representation of the {@link isOpenTuesday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPEN_TUESDAY: fieldBuilder.buildEnumField(
          'IsOpenTuesday',
          BusinessProcessCalendarDayStatus,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link isOpenSunday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPEN_SUNDAY: fieldBuilder.buildEnumField(
          'IsOpenSunday',
          BusinessProcessCalendarDayStatus,
          true
        ),
        /**
         * Static representation of the {@link startDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        START_DATE: fieldBuilder.buildEdmTypeField(
          'StartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isOpenMonday} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_OPEN_MONDAY: fieldBuilder.buildEnumField(
          'IsOpenMonday',
          BusinessProcessCalendarDayStatus,
          true
        ),
        /**
         * Static representation of the {@link endDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        END_DATE: fieldBuilder.buildEdmTypeField(
          'EndDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BusinessProcessCalendars)
      };
    }

    return this._schema;
  }
}
