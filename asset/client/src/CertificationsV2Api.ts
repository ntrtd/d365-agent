/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CertificationsV2 } from './CertificationsV2';
import { CertificationsV2RequestBuilder } from './CertificationsV2RequestBuilder';
import { NoYes } from './NoYes';
import { CertificationOrigin } from './CertificationOrigin';
import { CertificationReviewed } from './CertificationReviewed';
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
export class CertificationsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CertificationsV2<DeSerializersT>, DeSerializersT>
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
  ): CertificationsV2Api<DeSerializersT> {
    return new CertificationsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CertificationsV2;

  requestBuilder(): CertificationsV2RequestBuilder<DeSerializersT> {
    return new CertificationsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CertificationsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CertificationsV2<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CertificationsV2<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof CertificationsV2, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CertificationsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CERTIFICATION_NUMBER: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VENDOR_NAME: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFICATE_RECEIVED: EnumField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    VALID_FROM_DATE: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    COMMENTS_PSN: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATA_AREA_ID: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFICATION_ORIGIN: EnumField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      CertificationOrigin,
      true,
      true
    >;
    CERTIFICATION_DATE: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VENDOR_PARTY_NUMBER: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IN_PROCESS_PSN: EnumField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CERTIFICATION_TYPE: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DUE_DATE_PSN: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LIABILITY_AMOUNT_PSN: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REVIEWED: EnumField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      CertificationReviewed,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_TO_DATE: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ISSUER_PARTY_PARTY_NUMBER: OrderableEdmTypeField<
      CertificationsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<CertificationsV2<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link certificationNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATION_NUMBER: fieldBuilder.buildEdmTypeField(
          'CertificationNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link vendorName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_NAME: fieldBuilder.buildEdmTypeField(
          'Vendor_Name',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link certificateReceived} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_RECEIVED: fieldBuilder.buildEnumField(
          'CertificateReceived',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link validFromDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM_DATE: fieldBuilder.buildEdmTypeField(
          'ValidFromDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link commentsPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMMENTS_PSN: fieldBuilder.buildEdmTypeField(
          'Comments_PSN',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link certificationOrigin} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATION_ORIGIN: fieldBuilder.buildEnumField(
          'CertificationOrigin',
          CertificationOrigin,
          true
        ),
        /**
         * Static representation of the {@link certificationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATION_DATE: fieldBuilder.buildEdmTypeField(
          'CertificationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link vendorPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VENDOR_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'Vendor_PartyNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link inProcessPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IN_PROCESS_PSN: fieldBuilder.buildEnumField(
          'InProcess_PSN',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link certificationType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATION_TYPE: fieldBuilder.buildEdmTypeField(
          'CertificationType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dueDatePsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE_PSN: fieldBuilder.buildEdmTypeField(
          'DueDate_PSN',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link liabilityAmountPsn} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIABILITY_AMOUNT_PSN: fieldBuilder.buildEdmTypeField(
          'LiabilityAmount_PSN',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link reviewed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVIEWED: fieldBuilder.buildEnumField(
          'Reviewed',
          CertificationReviewed,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link validToDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO_DATE: fieldBuilder.buildEdmTypeField(
          'ValidToDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link issuerPartyPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ISSUER_PARTY_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'IssuerParty_PartyNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CertificationsV2)
      };
    }

    return this._schema;
  }
}
