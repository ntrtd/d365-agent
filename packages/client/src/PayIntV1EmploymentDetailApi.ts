/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayIntV1EmploymentDetail } from './PayIntV1EmploymentDetail';
import { PayIntV1EmploymentDetailRequestBuilder } from './PayIntV1EmploymentDetailRequestBuilder';
import { HcmEmploymentType } from './HcmEmploymentType';
import { BenefitEmploymentStatus } from './BenefitEmploymentStatus';
import { HcmUnitOfNotice } from './HcmUnitOfNotice';
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
export class PayIntV1EmploymentDetailApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PayIntV1EmploymentDetail<DeSerializersT>, DeSerializersT>
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
  ): PayIntV1EmploymentDetailApi<DeSerializersT> {
    return new PayIntV1EmploymentDetailApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PayIntV1EmploymentDetail;

  requestBuilder(): PayIntV1EmploymentDetailRequestBuilder<DeSerializersT> {
    return new PayIntV1EmploymentDetailRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PayIntV1EmploymentDetail<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PayIntV1EmploymentDetail<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PayIntV1EmploymentDetail<DeSerializersT>,
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
    typeof PayIntV1EmploymentDetail,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PayIntV1EmploymentDetail,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    EMPLOYMENT_START_DATE: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EMPLOYMENT_END_DATE: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_NOTICE_AMOUNT: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PAY_FREQUENCY: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EMPLOYMENT_TYPE: EnumField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      HcmEmploymentType,
      true,
      true
    >;
    EMPLOYMENT_CATEGORY_ID: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LAST_DATE_WORKED: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    PAY_FREQUENCY_ID: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMPLOYER_NOTICE_AMOUNT: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    REASON_CODE_ID: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EMPLOYMENT_TYPE_ID: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSISTION_DATE: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    BENEFIT_EMPLOYMENT_STATUS: EnumField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      BenefitEmploymentStatus,
      true,
      true
    >;
    EMPLOYER_UNIT_OF_NOTICE: EnumField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      HcmUnitOfNotice,
      true,
      true
    >;
    ADJUSTED_WORKER_START_DATE: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_START_DATE: OrderableEdmTypeField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    WORKER_UNIT_OF_NOTICE: EnumField<
      PayIntV1EmploymentDetail<DeSerializers>,
      DeSerializersT,
      HcmUnitOfNotice,
      true,
      true
    >;
    ALL_FIELDS: AllFields<PayIntV1EmploymentDetail<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link personnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'PersonnelNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link employmentStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_START_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link employmentEndDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_END_DATE: fieldBuilder.buildEdmTypeField(
          'EmploymentEndDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerNoticeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_NOTICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'WorkerNoticeAmount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link payFrequency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_FREQUENCY: fieldBuilder.buildEdmTypeField(
          'PayFrequency',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link employmentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_TYPE: fieldBuilder.buildEnumField(
          'EmploymentType',
          HcmEmploymentType,
          true
        ),
        /**
         * Static representation of the {@link employmentCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'EmploymentCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link lastDateWorked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAST_DATE_WORKED: fieldBuilder.buildEdmTypeField(
          'LastDateWorked',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link payFrequencyId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PAY_FREQUENCY_ID: fieldBuilder.buildEdmTypeField(
          'PayFrequencyId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link employerNoticeAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_NOTICE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'EmployerNoticeAmount',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link reasonCodeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE_ID: fieldBuilder.buildEdmTypeField(
          'ReasonCodeId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link employmentTypeId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYMENT_TYPE_ID: fieldBuilder.buildEdmTypeField(
          'EmploymentTypeId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transistionDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSISTION_DATE: fieldBuilder.buildEdmTypeField(
          'TransistionDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link benefitEmploymentStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_EMPLOYMENT_STATUS: fieldBuilder.buildEnumField(
          'BenefitEmploymentStatus',
          BenefitEmploymentStatus,
          true
        ),
        /**
         * Static representation of the {@link employerUnitOfNotice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYER_UNIT_OF_NOTICE: fieldBuilder.buildEnumField(
          'EmployerUnitOfNotice',
          HcmUnitOfNotice,
          true
        ),
        /**
         * Static representation of the {@link adjustedWorkerStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ADJUSTED_WORKER_START_DATE: fieldBuilder.buildEdmTypeField(
          'AdjustedWorkerStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerStartDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_START_DATE: fieldBuilder.buildEdmTypeField(
          'WorkerStartDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link workerUnitOfNotice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WORKER_UNIT_OF_NOTICE: fieldBuilder.buildEnumField(
          'WorkerUnitOfNotice',
          HcmUnitOfNotice,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PayIntV1EmploymentDetail)
      };
    }

    return this._schema;
  }
}
