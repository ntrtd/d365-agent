/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SmaServiceOrderTableBiEntities } from './SmaServiceOrderTableBiEntities';
import { SmaServiceOrderTableBiEntitiesRequestBuilder } from './SmaServiceOrderTableBiEntitiesRequestBuilder';
import { SmmActivityPriority } from './SmmActivityPriority';
import { SmaLogStatus } from './SmaLogStatus';
import { SmaServiceOrderProgress } from './SmaServiceOrderProgress';
import { NoYes } from './NoYes';
import { SmaServiceOrderOrigin } from './SmaServiceOrderOrigin';
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
export class SmaServiceOrderTableBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<SmaServiceOrderTableBiEntities<DeSerializersT>, DeSerializersT>
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
  ): SmaServiceOrderTableBiEntitiesApi<DeSerializersT> {
    return new SmaServiceOrderTableBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = SmaServiceOrderTableBiEntities;

  requestBuilder(): SmaServiceOrderTableBiEntitiesRequestBuilder<DeSerializersT> {
    return new SmaServiceOrderTableBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    SmaServiceOrderTableBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      SmaServiceOrderTableBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    SmaServiceOrderTableBiEntities<DeSerializersT>,
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
    typeof SmaServiceOrderTableBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        SmaServiceOrderTableBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SERVICE_ORDER_ID: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PRIORITY: EnumField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      SmmActivityPriority,
      true,
      true
    >;
    CONTACT_PERSON_ID: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPLIANCE: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    SYS_DATA_AREA_ID: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_TYPE_ID: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_ID: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTIVITY_NUMBER: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SIGN_OFF_DATE_TIME: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ADDRESS_REF_TABLE_ID: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ADDRESS_REF_REC_ID: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SERVICE_LEVEL_AGREEMENT_STATUS: EnumField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      SmaLogStatus,
      true,
      true
    >;
    SERVICE_ADDRESS_NAME: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROGRESS: EnumField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      SmaServiceOrderProgress,
      true,
      true
    >;
    SERVICE_DATE_TIME: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CALENDAR_CONFLICT: EnumField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STAGE_ID: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFIED_PAYROLL: EnumField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    SIGN_OFF: EnumField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CREATED_ON: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    SERVICE_POSTAL_ADDRESS: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    INCOMING_WEB_ORDER: EnumField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WORKER_PREFERRED_TECHNICIAN: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AGREEMENT_ID: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORIGIN: EnumField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      SmaServiceOrderOrigin,
      true,
      true
    >;
    SERVICE_LEVEL_AGREEMENT: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_RESPONSIBLE: OrderableEdmTypeField<
      SmaServiceOrderTableBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    ALL_FIELDS: AllFields<SmaServiceOrderTableBiEntities<DeSerializers>>;
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
         * Static representation of the {@link serviceOrderId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ORDER_ID: fieldBuilder.buildEdmTypeField(
          'ServiceOrderId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link priority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIORITY: fieldBuilder.buildEnumField(
          'Priority',
          SmmActivityPriority,
          true
        ),
        /**
         * Static representation of the {@link contactPersonId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_ID: fieldBuilder.buildEdmTypeField(
          'ContactPersonId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link compliance} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPLIANCE: fieldBuilder.buildEdmTypeField(
          'Compliance',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link sysDataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'SysDataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link activityTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'ActivityTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_ID: fieldBuilder.buildEdmTypeField('ProjId', 'Edm.String', true),
        /**
         * Static representation of the {@link activityNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTIVITY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ActivityNumber',
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
         * Static representation of the {@link signOffDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGN_OFF_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'SignOffDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link addressRefTableId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_TABLE_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefTableId',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link addressRefRecId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADDRESS_REF_REC_ID: fieldBuilder.buildEdmTypeField(
          'AddressRefRecId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link serviceLevelAgreementStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LEVEL_AGREEMENT_STATUS: fieldBuilder.buildEnumField(
          'ServiceLevelAgreementStatus',
          SmaLogStatus,
          true
        ),
        /**
         * Static representation of the {@link serviceAddressName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_ADDRESS_NAME: fieldBuilder.buildEdmTypeField(
          'ServiceAddressName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link progress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROGRESS: fieldBuilder.buildEnumField(
          'Progress',
          SmaServiceOrderProgress,
          true
        ),
        /**
         * Static representation of the {@link serviceDateTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_DATE_TIME: fieldBuilder.buildEdmTypeField(
          'ServiceDateTime',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link calendarConflict} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALENDAR_CONFLICT: fieldBuilder.buildEnumField(
          'CalendarConflict',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link stageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STAGE_ID: fieldBuilder.buildEdmTypeField('StageId', 'Edm.String', true),
        /**
         * Static representation of the {@link certifiedPayroll} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFIED_PAYROLL: fieldBuilder.buildEnumField(
          'CertifiedPayroll',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link signOff} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SIGN_OFF: fieldBuilder.buildEnumField('SignOff', NoYes, true),
        /**
         * Static representation of the {@link createdOn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_ON: fieldBuilder.buildEdmTypeField(
          'CreatedOn',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link servicePostalAddress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_POSTAL_ADDRESS: fieldBuilder.buildEdmTypeField(
          'ServicePostalAddress',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link incomingWebOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INCOMING_WEB_ORDER: fieldBuilder.buildEnumField(
          'IncomingWebOrder',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link workerPreferredTechnician} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_PREFERRED_TECHNICIAN: fieldBuilder.buildEdmTypeField(
          'WorkerPreferredTechnician',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link custAccount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CUST_ACCOUNT: fieldBuilder.buildEdmTypeField(
          'CustAccount',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link agreementId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_ID: fieldBuilder.buildEdmTypeField(
          'AgreementId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link origin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORIGIN: fieldBuilder.buildEnumField(
          'Origin',
          SmaServiceOrderOrigin,
          true
        ),
        /**
         * Static representation of the {@link serviceLevelAgreement} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LEVEL_AGREEMENT: fieldBuilder.buildEdmTypeField(
          'ServiceLevelAgreement',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerResponsible} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_RESPONSIBLE: fieldBuilder.buildEdmTypeField(
          'WorkerResponsible',
          'Edm.Int64',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', SmaServiceOrderTableBiEntities)
      };
    }

    return this._schema;
  }
}
