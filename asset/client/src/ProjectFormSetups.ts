/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ProjectFormSetupsApi } from './ProjectFormSetupsApi';
import { TaxSpecPrintLevel } from './TaxSpecPrintLevel';
import { NoYes } from './NoYes';
import { PrePrintLevel } from './PrePrintLevel';
import { FirstLast } from './FirstLast';
import { PaymentStub } from './PaymentStub';
import { OurYourBoth } from './OurYourBoth';

/**
 * This class represents the entity "ProjectFormSetups" of service "d365_metadata".
 */
export class ProjectFormSetups<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ProjectFormSetupsType<T>
{
  /**
   * Technical entity name for ProjectFormSetups.
   */
  static override _entityName = 'ProjectFormSetups';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ProjectFormSetups entity.
   */
  static _keys = ['dataAreaId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Sales Tax Specification.
   * @nullable
   */
  declare salesTaxSpecification?: TaxSpecPrintLevel | null;
  /**
   * Print Packing Slip Specifications On Invoice.
   * @nullable
   */
  declare printPackingSlipSpecificationsOnInvoice?: NoYes | null;
  /**
   * Print Tax Exempt Number On Invoice.
   * @nullable
   */
  declare printTaxExemptNumberOnInvoice?: NoYes | null;
  /**
   * Specify Index Calculation.
   * @nullable
   */
  declare specifyIndexCalculation?: NoYes | null;
  /**
   * Separate Tax Exempt Balance In Forms.
   * @nullable
   */
  declare separateTaxExemptBalanceInForms?: NoYes | null;
  /**
   * Pre Print Level Invoice.
   * @nullable
   */
  declare prePrintLevelInvoice?: PrePrintLevel | null;
  /**
   * Totals First Last Page.
   * @nullable
   */
  declare totalsFirstLastPage?: FirstLast | null;
  /**
   * Print Euro Amount.
   * @nullable
   */
  declare printEuroAmount?: NoYes | null;
  /**
   * Associated Payment Attachment On Invoice.
   * @nullable
   */
  declare associatedPaymentAttachmentOnInvoice?: PaymentStub | null;
  /**
   * Item Number In Forms.
   * @nullable
   */
  declare itemNumberInForms?: OurYourBoth | null;
  /**
   * Packing Slip.
   */
  declare packingSlip: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Invoice.
   */
  declare invoice: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: ProjectFormSetupsApi<T>) {
    super(_entityApi);
  }
}

export interface ProjectFormSetupsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  salesTaxSpecification?: TaxSpecPrintLevel | null;
  printPackingSlipSpecificationsOnInvoice?: NoYes | null;
  printTaxExemptNumberOnInvoice?: NoYes | null;
  specifyIndexCalculation?: NoYes | null;
  separateTaxExemptBalanceInForms?: NoYes | null;
  prePrintLevelInvoice?: PrePrintLevel | null;
  totalsFirstLastPage?: FirstLast | null;
  printEuroAmount?: NoYes | null;
  associatedPaymentAttachmentOnInvoice?: PaymentStub | null;
  itemNumberInForms?: OurYourBoth | null;
  packingSlip: DeserializedType<T, 'Edm.Int32'>;
  invoice: DeserializedType<T, 'Edm.Int32'>;
}
