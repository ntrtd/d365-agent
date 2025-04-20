/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionUnionAgreements } from './PositionUnionAgreements';
import { PositionUnionAgreementsRequestBuilder } from './PositionUnionAgreementsRequestBuilder';
import { PositionsV2Api } from './PositionsV2Api';
import { LaborUnionAgreementsApi } from './LaborUnionAgreementsApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class PositionUnionAgreementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PositionUnionAgreements<DeSerializersT>, DeSerializersT>
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
  ): PositionUnionAgreementsApi<DeSerializersT> {
    return new PositionUnionAgreementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      PositionUnionAgreements<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link laborUnionAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LABOR_UNION_AGREEMENT: OneToOneLink<
      PositionUnionAgreements<DeSerializersT>,
      DeSerializersT,
      LaborUnionAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      PositionsV2Api<DeSerializersT>,
      LaborUnionAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      POSITION: new OneToOneLink('Position', this, linkedApis[0]),
      LABOR_UNION_AGREEMENT: new OneToOneLink(
        'LaborUnionAgreement',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = PositionUnionAgreements;

  requestBuilder(): PositionUnionAgreementsRequestBuilder<DeSerializersT> {
    return new PositionUnionAgreementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PositionUnionAgreements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PositionUnionAgreements<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PositionUnionAgreements<DeSerializersT>,
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
    typeof PositionUnionAgreements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PositionUnionAgreements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    POSITION_ID: OrderableEdmTypeField<
      PositionUnionAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      PositionUnionAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      PositionUnionAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      PositionUnionAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABOR_UNION_ID: OrderableEdmTypeField<
      PositionUnionAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNION_AGREEMENT_NAME: OrderableEdmTypeField<
      PositionUnionAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link position} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION: OneToOneLink<
      PositionUnionAgreements<DeSerializersT>,
      DeSerializersT,
      PositionsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link laborUnionAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LABOR_UNION_AGREEMENT: OneToOneLink<
      PositionUnionAgreements<DeSerializersT>,
      DeSerializersT,
      LaborUnionAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PositionUnionAgreements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
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
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
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
         * Static representation of the {@link laborUnionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABOR_UNION_ID: fieldBuilder.buildEdmTypeField(
          'LaborUnionId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unionAgreementName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNION_AGREEMENT_NAME: fieldBuilder.buildEdmTypeField(
          'UnionAgreementName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PositionUnionAgreements)
      };
    }

    return this._schema;
  }
}
