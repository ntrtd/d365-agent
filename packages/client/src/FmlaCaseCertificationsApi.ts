/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FmlaCaseCertifications } from './FmlaCaseCertifications';
import { FmlaCaseCertificationsRequestBuilder } from './FmlaCaseCertificationsRequestBuilder';
import { HrmBlankYesNo } from './HrmBlankYesNo';
import { HcmFmlaReason } from './HcmFmlaReason';
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
export class FmlaCaseCertificationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<FmlaCaseCertifications<DeSerializersT>, DeSerializersT>
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
  ): FmlaCaseCertificationsApi<DeSerializersT> {
    return new FmlaCaseCertificationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FmlaCaseCertifications;

  requestBuilder(): FmlaCaseCertificationsRequestBuilder<DeSerializersT> {
    return new FmlaCaseCertificationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FmlaCaseCertifications<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FmlaCaseCertifications<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FmlaCaseCertifications<DeSerializersT>,
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
    typeof FmlaCaseCertifications,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FmlaCaseCertifications,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      FmlaCaseCertifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CASE_ID: OrderableEdmTypeField<
      FmlaCaseCertifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_CERTIFICATE: EnumField<
      FmlaCaseCertifications<DeSerializers>,
      DeSerializersT,
      HrmBlankYesNo,
      true,
      true
    >;
    DATE_SENT: OrderableEdmTypeField<
      FmlaCaseCertifications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DUE_DATE: OrderableEdmTypeField<
      FmlaCaseCertifications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    NOTES: OrderableEdmTypeField<
      FmlaCaseCertifications<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REASON_FOR_INVALID_CERTIFICATE: EnumField<
      FmlaCaseCertifications<DeSerializers>,
      DeSerializersT,
      HcmFmlaReason,
      true,
      true
    >;
    REQUESTED_DATE: OrderableEdmTypeField<
      FmlaCaseCertifications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DATE_RETURNED: OrderableEdmTypeField<
      FmlaCaseCertifications<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<FmlaCaseCertifications<DeSerializers>>;
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
         * Static representation of the {@link caseId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CASE_ID: fieldBuilder.buildEdmTypeField('CaseID', 'Edm.String', false),
        /**
         * Static representation of the {@link validCertificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_CERTIFICATE: fieldBuilder.buildEnumField(
          'ValidCertificate',
          HrmBlankYesNo,
          true
        ),
        /**
         * Static representation of the {@link dateSent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_SENT: fieldBuilder.buildEdmTypeField(
          'DateSent',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dueDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DUE_DATE: fieldBuilder.buildEdmTypeField(
          'DueDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link notes} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTES: fieldBuilder.buildEdmTypeField('Notes', 'Edm.String', false),
        /**
         * Static representation of the {@link reasonForInvalidCertificate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_FOR_INVALID_CERTIFICATE: fieldBuilder.buildEnumField(
          'ReasonForInvalidCertificate',
          HcmFmlaReason,
          true
        ),
        /**
         * Static representation of the {@link requestedDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUESTED_DATE: fieldBuilder.buildEdmTypeField(
          'RequestedDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link dateReturned} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_RETURNED: fieldBuilder.buildEdmTypeField(
          'DateReturned',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FmlaCaseCertifications)
      };
    }

    return this._schema;
  }
}
