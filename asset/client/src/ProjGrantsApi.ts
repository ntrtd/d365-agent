/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjGrants } from './ProjGrants';
import { ProjGrantsRequestBuilder } from './ProjGrantsRequestBuilder';
import { NoYes } from './NoYes';
import { ProjGrantStatus } from './ProjGrantStatus';
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
export class ProjGrantsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjGrants<DeSerializersT>, DeSerializersT>
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
  ): ProjGrantsApi<DeSerializersT> {
    return new ProjGrantsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjGrants;

  requestBuilder(): ProjGrantsRequestBuilder<DeSerializersT> {
    return new ProjGrantsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjGrants<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProjGrants<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProjGrants<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ProjGrants, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ProjGrants, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GRANT_ID: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GRANT_NAME: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLICATION_SUBMITTED_DATE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PROJ_GRANTOR_TYPE_GRANTOR_TYPE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUB_GRANTOR: EnumField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REJECTION_NOTIFICATION: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PASS_THROUGH: EnumField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ACTUAL_EXPIRATION_DATE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    FEDERAL_MANDATE: EnumField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ESTIMATED_AWARD_DATE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    RENEWAL_ACTION_DATE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ACTUAL_AWARD_DATE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GRANT_MATCHING_COMMENTS: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ORGANIZATION_UNIT_ID: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AWARDED_AMOUNT: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GRANT_STATUS: EnumField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      ProjGrantStatus,
      true,
      true
    >;
    PROJ_GRANT_TYPE_GRANT_TYPE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    APPLICATION_DUE_DATE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    GRANT_APPLICATION_ID: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WORKER_CONTACT_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCHING_PERCENTAGE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GRANT_DESCRIPTION: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATCHING_AMOUNT: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CFDA_ID: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CUST_ACCOUNT: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_LOCAL_TRACKING_ID: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PROJ_GRANT_MATCHING_MATCHING_TYPE_CODE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    GRANT_PURPOSE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BOARD_APPROVAL_DATE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    REQUESTED_AMOUNT: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    GRANT_MANAGER_WORKER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACTUAL_START_DATE: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATE_MANDATE: EnumField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    GRANT_PARENT_ID: OrderableEdmTypeField<
      ProjGrants<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjGrants<DeSerializers>>;
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
         * Static representation of the {@link grantId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRANT_ID: fieldBuilder.buildEdmTypeField(
          'GrantId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link grantName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRANT_NAME: fieldBuilder.buildEdmTypeField(
          'GrantName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applicationSubmittedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_SUBMITTED_DATE: fieldBuilder.buildEdmTypeField(
          'ApplicationSubmittedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link projGrantorTypeGrantorType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_GRANTOR_TYPE_GRANTOR_TYPE: fieldBuilder.buildEdmTypeField(
          'ProjGrantorType_GrantorType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link subGrantor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUB_GRANTOR: fieldBuilder.buildEnumField('SubGrantor', NoYes, true),
        /**
         * Static representation of the {@link rejectionNotification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REJECTION_NOTIFICATION: fieldBuilder.buildEdmTypeField(
          'RejectionNotification',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link passThrough} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PASS_THROUGH: fieldBuilder.buildEnumField('PassThrough', NoYes, true),
        /**
         * Static representation of the {@link actualExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ActualExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link federalMandate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FEDERAL_MANDATE: fieldBuilder.buildEnumField(
          'FederalMandate',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link estimatedAwardDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ESTIMATED_AWARD_DATE: fieldBuilder.buildEdmTypeField(
          'EstimatedAwardDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link renewalActionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RENEWAL_ACTION_DATE: fieldBuilder.buildEdmTypeField(
          'RenewalActionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link actualAwardDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_AWARD_DATE: fieldBuilder.buildEdmTypeField(
          'ActualAwardDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link grantMatchingComments} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRANT_MATCHING_COMMENTS: fieldBuilder.buildEdmTypeField(
          'GrantMatchingComments',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link organizationUnitId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_UNIT_ID: fieldBuilder.buildEdmTypeField(
          'OrganizationUnitId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link awardedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AWARDED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'AwardedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link grantStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRANT_STATUS: fieldBuilder.buildEnumField(
          'GrantStatus',
          ProjGrantStatus,
          true
        ),
        /**
         * Static representation of the {@link projGrantTypeGrantType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_GRANT_TYPE_GRANT_TYPE: fieldBuilder.buildEdmTypeField(
          'ProjGrantType_GrantType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link applicationDueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        APPLICATION_DUE_DATE: fieldBuilder.buildEdmTypeField(
          'ApplicationDueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link grantApplicationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRANT_APPLICATION_ID: fieldBuilder.buildEdmTypeField(
          'GrantApplicationId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link workerContactPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_CONTACT_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'WorkerContact_PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matchingPercentage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_PERCENTAGE: fieldBuilder.buildEdmTypeField(
          'MatchingPercentage',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link grantDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRANT_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'GrantDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link matchingAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATCHING_AMOUNT: fieldBuilder.buildEdmTypeField(
          'MatchingAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link cfdaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CFDA_ID: fieldBuilder.buildEdmTypeField('CFDAId', 'Edm.String', true),
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
         * Static representation of the {@link projLocalTrackingId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_LOCAL_TRACKING_ID: fieldBuilder.buildEdmTypeField(
          'ProjLocalTrackingId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link projGrantMatchingMatchingTypeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJ_GRANT_MATCHING_MATCHING_TYPE_CODE: fieldBuilder.buildEdmTypeField(
          'ProjGrantMatching_MatchingTypeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link grantPurpose} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRANT_PURPOSE: fieldBuilder.buildEdmTypeField(
          'GrantPurpose',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link boardApprovalDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BOARD_APPROVAL_DATE: fieldBuilder.buildEdmTypeField(
          'BoardApprovalDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link requestedAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RequestedAmount',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link grantManagerWorkerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRANT_MANAGER_WORKER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'GrantManagerWorker_PersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link actualStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACTUAL_START_DATE: fieldBuilder.buildEdmTypeField(
          'ActualStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link stateMandate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE_MANDATE: fieldBuilder.buildEnumField('StateMandate', NoYes, true),
        /**
         * Static representation of the {@link grantParentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRANT_PARENT_ID: fieldBuilder.buildEdmTypeField(
          'GrantParentId',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjGrants)
      };
    }

    return this._schema;
  }
}
