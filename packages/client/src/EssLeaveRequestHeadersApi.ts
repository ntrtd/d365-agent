/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EssLeaveRequestHeaders } from './EssLeaveRequestHeaders';
import { EssLeaveRequestHeadersRequestBuilder } from './EssLeaveRequestHeadersRequestBuilder';
import { EssLeaveRequestDetailsApi } from './EssLeaveRequestDetailsApi';
import { EssWorkersApi } from './EssWorkersApi';
import { UnknownNoYes } from './UnknownNoYes';
import { LeaveRequestApprovalStatus } from './LeaveRequestApprovalStatus';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class EssLeaveRequestHeadersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<EssLeaveRequestHeaders<DeSerializersT>, DeSerializersT>
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
  ): EssLeaveRequestHeadersApi<DeSerializersT> {
    return new EssLeaveRequestHeadersApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      EssLeaveRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      EssLeaveRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EssWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link submittedBy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUBMITTED_BY: OneToOneLink<
      EssLeaveRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EssWorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      EssLeaveRequestDetailsApi<DeSerializersT>,
      EssWorkersApi<DeSerializersT>,
      EssWorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DETAILS: new OneToManyLink('Details', this, linkedApis[0]),
      WORKER: new OneToOneLink('Worker', this, linkedApis[1]),
      SUBMITTED_BY: new OneToOneLink('SubmittedBy', this, linkedApis[2])
    };
    return this;
  }

  entityConstructor = EssLeaveRequestHeaders;

  requestBuilder(): EssLeaveRequestHeadersRequestBuilder<DeSerializersT> {
    return new EssLeaveRequestHeadersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    EssLeaveRequestHeaders<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EssLeaveRequestHeaders<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EssLeaveRequestHeaders<DeSerializersT>,
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
    typeof EssLeaveRequestHeaders,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EssLeaveRequestHeaders,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_ID: OrderableEdmTypeField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REQUEST_DATE: OrderableEdmTypeField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_SUBMITTED_BY_HUMAN_RESOURCES: EnumField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    IS_SUBMITTED_BY_MANAGER: EnumField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SUBMITTED_BY_USER: OrderableEdmTypeField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMMENT: OrderableEdmTypeField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    START_DATE: OrderableEdmTypeField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    STATUS: EnumField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      LeaveRequestApprovalStatus,
      true,
      true
    >;
    IS_SUBMITTED_BY_ABSENCE_MANAGER: EnumField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    END_DATE: OrderableEdmTypeField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    IS_SUBMITTED_ON_BEHALF_OF: EnumField<
      EssLeaveRequestHeaders<DeSerializers>,
      DeSerializersT,
      UnknownNoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link details} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DETAILS: OneToManyLink<
      EssLeaveRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EssLeaveRequestDetailsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link worker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WORKER: OneToOneLink<
      EssLeaveRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EssWorkersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link submittedBy} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SUBMITTED_BY: OneToOneLink<
      EssLeaveRequestHeaders<DeSerializersT>,
      DeSerializersT,
      EssWorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<EssLeaveRequestHeaders<DeSerializers>>;
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
         * Static representation of the {@link requestId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_ID: fieldBuilder.buildEdmTypeField(
          'RequestId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link requestDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUEST_DATE: fieldBuilder.buildEdmTypeField(
          'RequestDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link isSubmittedByHumanResources} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUBMITTED_BY_HUMAN_RESOURCES: fieldBuilder.buildEnumField(
          'IsSubmittedByHumanResources',
          UnknownNoYes,
          true
        ),
        /**
         * Static representation of the {@link isSubmittedByManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUBMITTED_BY_MANAGER: fieldBuilder.buildEnumField(
          'IsSubmittedByManager',
          UnknownNoYes,
          true
        ),
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
         * Static representation of the {@link submittedByUser} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBMITTED_BY_USER: fieldBuilder.buildEdmTypeField(
          'SubmittedByUser',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link reasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReasonCodeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link comment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENT: fieldBuilder.buildEdmTypeField('Comment', 'Edm.String', true),
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
         * Static representation of the {@link status} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATUS: fieldBuilder.buildEnumField(
          'Status',
          LeaveRequestApprovalStatus,
          true
        ),
        /**
         * Static representation of the {@link isSubmittedByAbsenceManager} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUBMITTED_BY_ABSENCE_MANAGER: fieldBuilder.buildEnumField(
          'IsSubmittedByAbsenceManager',
          UnknownNoYes,
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
        /**
         * Static representation of the {@link isSubmittedOnBehalfOf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_SUBMITTED_ON_BEHALF_OF: fieldBuilder.buildEnumField(
          'IsSubmittedOnBehalfOf',
          UnknownNoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EssLeaveRequestHeaders)
      };
    }

    return this._schema;
  }
}
