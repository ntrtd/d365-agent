/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EfDocTechResponsibleInformations } from './EfDocTechResponsibleInformations';
import { EfDocTechResponsibleInformationsRequestBuilder } from './EfDocTechResponsibleInformationsRequestBuilder';
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
export class EfDocTechResponsibleInformationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<EfDocTechResponsibleInformations<DeSerializersT>, DeSerializersT>
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
  ): EfDocTechResponsibleInformationsApi<DeSerializersT> {
    return new EfDocTechResponsibleInformationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = EfDocTechResponsibleInformations;

  requestBuilder(): EfDocTechResponsibleInformationsRequestBuilder<DeSerializersT> {
    return new EfDocTechResponsibleInformationsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EfDocTechResponsibleInformations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EfDocTechResponsibleInformations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EfDocTechResponsibleInformations<DeSerializersT>,
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
    typeof EfDocTechResponsibleInformations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EfDocTechResponsibleInformations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EfDocTechResponsibleInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      EfDocTechResponsibleInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TECHNICAL_RESPONSIBLE_CSRT_ID: OrderableEdmTypeField<
      EfDocTechResponsibleInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICAL_RESPONSIBLE_CONTACT_NAME: OrderableEdmTypeField<
      EfDocTechResponsibleInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICAL_RESPONSIBLE_CSRT: OrderableEdmTypeField<
      EfDocTechResponsibleInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICAL_RESPONSIBLE_PHONE: OrderableEdmTypeField<
      EfDocTechResponsibleInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICAL_RESPONSIBLE_CNPJ: OrderableEdmTypeField<
      EfDocTechResponsibleInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICAL_RESPONSIBLE_EMAIL: OrderableEdmTypeField<
      EfDocTechResponsibleInformations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<EfDocTechResponsibleInformations<DeSerializers>>;
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
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', false),
        /**
         * Static representation of the {@link technicalResponsibleCsrtId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_RESPONSIBLE_CSRT_ID: fieldBuilder.buildEdmTypeField(
          'TechnicalResponsibleCSRTId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link technicalResponsibleContactName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_RESPONSIBLE_CONTACT_NAME: fieldBuilder.buildEdmTypeField(
          'TechnicalResponsibleContactName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link technicalResponsibleCsrt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_RESPONSIBLE_CSRT: fieldBuilder.buildEdmTypeField(
          'TechnicalResponsibleCSRT',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link technicalResponsiblePhone} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_RESPONSIBLE_PHONE: fieldBuilder.buildEdmTypeField(
          'TechnicalResponsiblePhone',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link technicalResponsibleCnpj} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_RESPONSIBLE_CNPJ: fieldBuilder.buildEdmTypeField(
          'TechnicalResponsibleCNPJ',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link technicalResponsibleEmail} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_RESPONSIBLE_EMAIL: fieldBuilder.buildEdmTypeField(
          'TechnicalResponsibleEmail',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', EfDocTechResponsibleInformations)
      };
    }

    return this._schema;
  }
}
