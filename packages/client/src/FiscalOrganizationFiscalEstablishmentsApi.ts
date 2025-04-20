/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalOrganizationFiscalEstablishments } from './FiscalOrganizationFiscalEstablishments';
import { FiscalOrganizationFiscalEstablishmentsRequestBuilder } from './FiscalOrganizationFiscalEstablishmentsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class FiscalOrganizationFiscalEstablishmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      FiscalOrganizationFiscalEstablishments<DeSerializersT>,
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
  ): FiscalOrganizationFiscalEstablishmentsApi<DeSerializersT> {
    return new FiscalOrganizationFiscalEstablishmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalOrganizationFiscalEstablishments;

  requestBuilder(): FiscalOrganizationFiscalEstablishmentsRequestBuilder<DeSerializersT> {
    return new FiscalOrganizationFiscalEstablishmentsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    FiscalOrganizationFiscalEstablishments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalOrganizationFiscalEstablishments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalOrganizationFiscalEstablishments<DeSerializersT>,
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
    typeof FiscalOrganizationFiscalEstablishments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalOrganizationFiscalEstablishments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    FISCAL_ESTABLISHMENT_DATA_AREA: OrderableEdmTypeField<
      FiscalOrganizationFiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_ESTABLISHMENT: OrderableEdmTypeField<
      FiscalOrganizationFiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROOT_FISCAL_ESTABLISHMENT: OrderableEdmTypeField<
      FiscalOrganizationFiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ROOT_FISCAL_ESTABLISHMENT_DATA_AREA: OrderableEdmTypeField<
      FiscalOrganizationFiscalEstablishments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      FiscalOrganizationFiscalEstablishments<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link fiscalEstablishmentDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishmentDataArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalEstablishment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_ESTABLISHMENT: fieldBuilder.buildEdmTypeField(
          'FiscalEstablishment',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link rootFiscalEstablishment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOT_FISCAL_ESTABLISHMENT: fieldBuilder.buildEdmTypeField(
          'RootFiscalEstablishment',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rootFiscalEstablishmentDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOT_FISCAL_ESTABLISHMENT_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'RootFiscalEstablishmentDataArea',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalOrganizationFiscalEstablishments)
      };
    }

    return this._schema;
  }
}
