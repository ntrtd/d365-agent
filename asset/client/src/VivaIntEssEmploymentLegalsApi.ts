/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VivaIntEssEmploymentLegals } from './VivaIntEssEmploymentLegals';
import { VivaIntEssEmploymentLegalsRequestBuilder } from './VivaIntEssEmploymentLegalsRequestBuilder';
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
export class VivaIntEssEmploymentLegalsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<VivaIntEssEmploymentLegals<DeSerializersT>, DeSerializersT>
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
  ): VivaIntEssEmploymentLegalsApi<DeSerializersT> {
    return new VivaIntEssEmploymentLegalsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = VivaIntEssEmploymentLegals;

  requestBuilder(): VivaIntEssEmploymentLegalsRequestBuilder<DeSerializersT> {
    return new VivaIntEssEmploymentLegalsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    VivaIntEssEmploymentLegals<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      VivaIntEssEmploymentLegals<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    VivaIntEssEmploymentLegals<DeSerializersT>,
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
    typeof VivaIntEssEmploymentLegals,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        VivaIntEssEmploymentLegals,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    PERSONNEL_NUMBER: OrderableEdmTypeField<
      VivaIntEssEmploymentLegals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      VivaIntEssEmploymentLegals<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      VivaIntEssEmploymentLegals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_NAME: OrderableEdmTypeField<
      VivaIntEssEmploymentLegals<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<VivaIntEssEmploymentLegals<DeSerializers>>;
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
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntityName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_NAME: fieldBuilder.buildEdmTypeField(
          'LegalEntityName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', VivaIntEssEmploymentLegals)
      };
    }

    return this._schema;
  }
}
