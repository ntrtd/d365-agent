/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WithholdCertificates } from './WithholdCertificates';
import { WithholdCertificatesRequestBuilder } from './WithholdCertificatesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { TaxWithholdAcTypeIn } from './TaxWithholdAcTypeIn';
import { NoYes } from './NoYes';
import { TaxWithholdTypeIn } from './TaxWithholdTypeIn';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class WithholdCertificatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<WithholdCertificates<DeSerializersT>, DeSerializersT>
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
  ): WithholdCertificatesApi<DeSerializersT> {
    return new WithholdCertificatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      WithholdCertificates<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionCombinationsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = WithholdCertificates;

  requestBuilder(): WithholdCertificatesRequestBuilder<DeSerializersT> {
    return new WithholdCertificatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    WithholdCertificates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<WithholdCertificates<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WithholdCertificates<DeSerializersT>,
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
    typeof WithholdCertificates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WithholdCertificates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WithholdCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CERTIFICATE_NUMBER: OrderableEdmTypeField<
      WithholdCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      WithholdCertificates<DeSerializers>,
      DeSerializersT,
      TaxWithholdAcTypeIn,
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      WithholdCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    CLOSED: EnumField<
      WithholdCertificates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TAX_TYPE: EnumField<
      WithholdCertificates<DeSerializers>,
      DeSerializersT,
      TaxWithholdTypeIn,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      WithholdCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_DISPLAY_VALUE: OrderableEdmTypeField<
      WithholdCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CERTIFICATE_AMOUNT: OrderableEdmTypeField<
      WithholdCertificates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      WithholdCertificates<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WithholdCertificates<DeSerializers>>;
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
         * Static representation of the {@link certificateNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_NUMBER: fieldBuilder.buildEdmTypeField(
          'CertificateNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          TaxWithholdAcTypeIn,
          true
        ),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'Date',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link closed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED: fieldBuilder.buildEnumField('Closed', NoYes, true),
        /**
         * Static representation of the {@link taxType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TAX_TYPE: fieldBuilder.buildEnumField(
          'TaxType',
          TaxWithholdTypeIn,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link accountDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'AccountDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link certificateAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CERTIFICATE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'CertificateAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WithholdCertificates)
      };
    }

    return this._schema;
  }
}
