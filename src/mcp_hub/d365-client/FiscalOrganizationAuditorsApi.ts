/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FiscalOrganizationAuditors } from './FiscalOrganizationAuditors';
import { FiscalOrganizationAuditorsRequestBuilder } from './FiscalOrganizationAuditorsRequestBuilder';
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
export class FiscalOrganizationAuditorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<FiscalOrganizationAuditors<DeSerializersT>, DeSerializersT>
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
  ): FiscalOrganizationAuditorsApi<DeSerializersT> {
    return new FiscalOrganizationAuditorsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = FiscalOrganizationAuditors;

  requestBuilder(): FiscalOrganizationAuditorsRequestBuilder<DeSerializersT> {
    return new FiscalOrganizationAuditorsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    FiscalOrganizationAuditors<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      FiscalOrganizationAuditors<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    FiscalOrganizationAuditors<DeSerializersT>,
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
    typeof FiscalOrganizationAuditors,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        FiscalOrganizationAuditors,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CVM_NUMBER: OrderableEdmTypeField<
      FiscalOrganizationAuditors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      FiscalOrganizationAuditors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROOT_FISCAL_ESTABLISHMENT_DATA_AREA: OrderableEdmTypeField<
      FiscalOrganizationAuditors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ROOT_FISCAL_ESTABLISHMENT: OrderableEdmTypeField<
      FiscalOrganizationAuditors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<FiscalOrganizationAuditors<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link cvmNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CVM_NUMBER: fieldBuilder.buildEdmTypeField(
          'CVMNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link rootFiscalEstablishmentDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ROOT_FISCAL_ESTABLISHMENT_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'RootFiscalEstablishmentDataArea',
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
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', FiscalOrganizationAuditors)
      };
    }

    return this._schema;
  }
}
