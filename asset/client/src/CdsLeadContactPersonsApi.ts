/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CdsLeadContactPersons } from './CdsLeadContactPersons';
import { CdsLeadContactPersonsRequestBuilder } from './CdsLeadContactPersonsRequestBuilder';
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
export class CdsLeadContactPersonsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CdsLeadContactPersons<DeSerializersT>, DeSerializersT>
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
  ): CdsLeadContactPersonsApi<DeSerializersT> {
    return new CdsLeadContactPersonsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = CdsLeadContactPersons;

  requestBuilder(): CdsLeadContactPersonsRequestBuilder<DeSerializersT> {
    return new CdsLeadContactPersonsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CdsLeadContactPersons<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CdsLeadContactPersons<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CdsLeadContactPersons<DeSerializersT>,
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
    typeof CdsLeadContactPersons,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CdsLeadContactPersons,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CdsLeadContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CONTACT_PERSON_PARTY_NUMBER: OrderableEdmTypeField<
      CdsLeadContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEAD_ID: OrderableEdmTypeField<
      CdsLeadContactPersons<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<CdsLeadContactPersons<DeSerializers>>;
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
         * Static representation of the {@link contactPersonPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CONTACT_PERSON_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'ContactPersonPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link leadId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEAD_ID: fieldBuilder.buildEdmTypeField('LeadId', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CdsLeadContactPersons)
      };
    }

    return this._schema;
  }
}
