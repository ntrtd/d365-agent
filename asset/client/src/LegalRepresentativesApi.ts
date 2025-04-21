/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegalRepresentatives } from './LegalRepresentatives';
import { LegalRepresentativesRequestBuilder } from './LegalRepresentativesRequestBuilder';
import { LegalRepresentativeTypeBr } from './LegalRepresentativeTypeBr';
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
  OrderableEdmTypeField,
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class LegalRepresentativesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LegalRepresentatives<DeSerializersT>, DeSerializersT>
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
  ): LegalRepresentativesApi<DeSerializersT> {
    return new LegalRepresentativesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = LegalRepresentatives;

  requestBuilder(): LegalRepresentativesRequestBuilder<DeSerializersT> {
    return new LegalRepresentativesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LegalRepresentatives<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LegalRepresentatives<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LegalRepresentatives<DeSerializersT>,
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
    typeof LegalRepresentatives,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LegalRepresentatives,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CPF: OrderableEdmTypeField<
      LegalRepresentatives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_ORGANIZATION_ROOT_FISCAL_ESTABLISHMENT: OrderableEdmTypeField<
      LegalRepresentatives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_ORGANIZATION_ROOT_FISCAL_ESTABLISHMENT_DATA_AREA: OrderableEdmTypeField<
      LegalRepresentatives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROLE: EnumField<
      LegalRepresentatives<DeSerializers>,
      DeSerializersT,
      LegalRepresentativeTypeBr,
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      LegalRepresentatives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRC: OrderableEdmTypeField<
      LegalRepresentatives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATED_IN_RFB_AUTHORITY: EnumField<
      LegalRepresentatives<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CRC_STATE: OrderableEdmTypeField<
      LegalRepresentatives<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CRC_EXPIRATION_DATE: OrderableEdmTypeField<
      LegalRepresentatives<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<LegalRepresentatives<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link cpf} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CPF: fieldBuilder.buildEdmTypeField('CPF', 'Edm.String', false),
        /**
         * Static representation of the {@link fiscalOrganizationRootFiscalEstablishment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ORGANIZATION_ROOT_FISCAL_ESTABLISHMENT:
          fieldBuilder.buildEdmTypeField(
            'FiscalOrganizationRootFiscalEstablishment',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link fiscalOrganizationRootFiscalEstablishmentDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ORGANIZATION_ROOT_FISCAL_ESTABLISHMENT_DATA_AREA:
          fieldBuilder.buildEdmTypeField(
            'FiscalOrganizationRootFiscalEstablishmentDataArea',
            'Edm.String',
            false
          ),
        /**
         * Static representation of the {@link role} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROLE: fieldBuilder.buildEnumField(
          'Role',
          LegalRepresentativeTypeBr,
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link crc} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRC: fieldBuilder.buildEdmTypeField('CRC', 'Edm.String', true),
        /**
         * Static representation of the {@link validatedInRfbAuthority} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATED_IN_RFB_AUTHORITY: fieldBuilder.buildEnumField(
          'ValidatedInRFBAuthority',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link crcState} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRC_STATE: fieldBuilder.buildEdmTypeField(
          'CRCState',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link crcExpirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CRC_EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'CRCExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LegalRepresentatives)
      };
    }

    return this._schema;
  }
}
