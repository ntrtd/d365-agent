/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LaborUnionAgreements } from './LaborUnionAgreements';
import { LaborUnionAgreementsRequestBuilder } from './LaborUnionAgreementsRequestBuilder';
import { UnionsApi } from './UnionsApi';
import { PositionsApi } from './PositionsApi';
import { PositionUnionAgreementsApi } from './PositionUnionAgreementsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class LaborUnionAgreementsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LaborUnionAgreements<DeSerializersT>, DeSerializersT>
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
  ): LaborUnionAgreementsApi<DeSerializersT> {
    return new LaborUnionAgreementsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link laborUnion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LABOR_UNION: OneToOneLink<
      LaborUnionAgreements<DeSerializersT>,
      DeSerializersT,
      UnionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      LaborUnionAgreements<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionUnionAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_UNION_AGREEMENT: OneToManyLink<
      LaborUnionAgreements<DeSerializersT>,
      DeSerializersT,
      PositionUnionAgreementsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      UnionsApi<DeSerializersT>,
      PositionsApi<DeSerializersT>,
      PositionUnionAgreementsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      LABOR_UNION: new OneToOneLink('LaborUnion', this, linkedApis[0]),
      POSITIONS: new OneToManyLink('Positions', this, linkedApis[1]),
      POSITION_UNION_AGREEMENT: new OneToManyLink(
        'PositionUnionAgreement',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = LaborUnionAgreements;

  requestBuilder(): LaborUnionAgreementsRequestBuilder<DeSerializersT> {
    return new LaborUnionAgreementsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LaborUnionAgreements<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LaborUnionAgreements<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LaborUnionAgreements<DeSerializersT>,
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
    typeof LaborUnionAgreements,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LaborUnionAgreements,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    UNION_ID: OrderableEdmTypeField<
      LaborUnionAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AGREEMENT_NAME: OrderableEdmTypeField<
      LaborUnionAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      LaborUnionAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      LaborUnionAgreements<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link laborUnion} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LABOR_UNION: OneToOneLink<
      LaborUnionAgreements<DeSerializersT>,
      DeSerializersT,
      UnionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITIONS: OneToManyLink<
      LaborUnionAgreements<DeSerializersT>,
      DeSerializersT,
      PositionsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link positionUnionAgreement} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    POSITION_UNION_AGREEMENT: OneToManyLink<
      LaborUnionAgreements<DeSerializersT>,
      DeSerializersT,
      PositionUnionAgreementsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LaborUnionAgreements<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link unionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNION_ID: fieldBuilder.buildEdmTypeField(
          'UnionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link agreementName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AGREEMENT_NAME: fieldBuilder.buildEdmTypeField(
          'AgreementName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LaborUnionAgreements)
      };
    }

    return this._schema;
  }
}
